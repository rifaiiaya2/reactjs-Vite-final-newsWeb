import GradientText from "../GradientText";
import { TbDeviceIpadHorizontalSearch } from "react-icons/tb";
import NoImage from "../../../assets/images/noImage.jpg";
import { News } from "../../../utils/newsType";
import "./NewsCard.css";

interface INewsCardProps {
  news: News;
  onDetailsClick: () => void;
}

const NewsCard = ({ news, onDetailsClick }: INewsCardProps) => {
  const imageUrl = news.image_url ? news.image_url : NoImage;
  return (
    <div className="card-container">
      <img className="w-full h-60 rounded-t" src={imageUrl} alt={news.title} />
      <div className="title-container">
        <div className="title-style">
          <GradientText text={news.title} />
        </div>
      </div>
      <div className="details-btn-container">
        <TbDeviceIpadHorizontalSearch size={30} color="orange" />
        <button className="btn-style" onClick={onDetailsClick}>
          Details / المزيد
        </button>
      </div>
    </div>
  );
};
export default NewsCard;
