import GradientText from "../GradientText";
import { FcCalendar } from "react-icons/fc";
import UrlImg from "../../../assets/images/url.png";
import "./NewsModal.css";
import { TbWorldPin } from "react-icons/tb";
import { INewsModalProps } from "../../../utils/newsModalInterface";

const NewsModal = ({ isOpen, onClose, news }: INewsModalProps) => {
  if (!isOpen || !news) return null;
  const sourceIcon = news.source_icon ? news.source_icon : UrlImg;
  return (
    <div className="modal-container">
      <div className="bg-white p-4 rounded-lg max-w-lg w-full modal-content">
        <GradientText text={news.title} className="news-title"></GradientText>
        <div className="country-container">
          <TbWorldPin size={32} className="mr-2 text-red-600" />
          <h3 className="country-name">{news.country}</h3>
        </div>
        <p className="news-desc">{news.description}</p>
        <div className="pub-date-icon-container">
          <FcCalendar size={30} />
          <p className="pub-date">Published on: {news.pubDate}</p>
        </div>
        <div className="source-container">
          <img src={sourceIcon} className="w-54 h-6" />
          <a
            href={news.source_url}
            target="_blank"
            rel="noopener noreferrer"
            className="source-url"
          >
            {news.source_url}
          </a>
        </div>
        <div className="pt-4">
          <button onClick={onClose} className="close-btn">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
export default NewsModal;
