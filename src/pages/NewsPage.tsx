import axios from "axios";
import GradientText from "../components/atoms/GradientText";
import NewsCard from "../components/atoms/newsCard/NewsCard";
import useAuthLogout from "../services/logoutServices";
import {
  getAccessToken,
  getRefreshToken,
  saveAccessToken,
} from "../services/tokenServices";
import { API_URL } from "../apiUrl";
import { useEffect, useState } from "react";
import Footer from "../components/atoms/footer/Footer";
import storage from "redux-persist/lib/storage";
import { News } from "../utils/newsType";
import NewsModal from "../components/atoms/newsModal/NewsModal";

const NewsPage = () => {
  const [newsData, setNewsData] = useState<News[]>([]);
  const [selectedNews, setSelectedNews] = useState<News>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const authLogout = useAuthLogout();

  const fetchPosts: () => void = async () => {
    if (isFetching && isLoading && !hasMore) {
      return;
    }
    setIsFetching(true);
    setIsLoading(true);
    try {
      const accessToken = getAccessToken();
      const response = await axios.get(
        `${API_URL}/posts?page=${page}&pageSize=10`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.data.results.length > 0) {
        setNewsData((prevData) => [...prevData, ...response.data.results]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
      if (error) {
        try {
          const refreshToken = getRefreshToken();
          const refreshResponse = await axios.post(`${API_URL}/refresh-token`, {
            refreshToken: refreshToken,
          });
          const newAccessToken = refreshResponse.data.accessToken;
          saveAccessToken(newAccessToken);
          await storage.setItem("accessToken", newAccessToken);

          setIsFetching(false);
          return fetchPosts();
        } catch (refreshError) {
          console.error("Error refreshing token:", refreshError);
        }
      } else {
        setHasMore(false);
      }
    } finally {
      setIsLoading(false);
      setIsFetching(false);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, [page]);

  const openModal = (news: News) => {
    setSelectedNews(news);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="container mx-auto p-4 ">
      <div className="flex justify-between items-center mb-4">
        <GradientText
          text="World News"
          className="text-4xl tracking-widest font-bold "
        ></GradientText>
        <button
          onClick={authLogout}
          className="bg-brightColor hover:bg-orange-400 text-xl text-white font-bold py-2 px-4 rounded"
        >
          Sign-Out
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {newsData.map((news, index) => (
          <NewsCard
            key={`news-${news._id}-${index}`}
            news={news}
            onDetailsClick={() => openModal(news)}
          />
        ))}
      </div>
      {hasMore && (
        <button
          onClick={fetchPosts}
          disabled={isLoading}
          className={`mt-4 mx-auto bg-brightColor hover:bg-orange-600 text-white font-bold py-2 px-4 rounded ${
            isLoading ? "opacity-50" : ""
          }`}
        >
          {isLoading ? "Loading..." : "Load More"}
        </button>
      )}
      <NewsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        news={selectedNews}
      />
      <div className="pt-3 pb-3">
        <hr className="border-t-2 border-gray-400" />
        <Footer />
      </div>
    </div>
  );
};
export default NewsPage;
