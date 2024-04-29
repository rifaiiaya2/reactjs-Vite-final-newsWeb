import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousel1 from "../../assets/images/carousel1.jpg";
import carousel2 from "../../assets/images/carousel2.jpg";
import carousel3 from "../../assets/images/carousel3.jpg";
import carousel4 from "../../assets/images/carousel4.jpg";

const SliderData = [carousel1, carousel2, carousel3, carousel4];
const HomeCarousel = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    beforeChange: (_current: number, next: number) => setImageIndex(next),
  };

  return (
    <div className="overflow-x-hidden overflow-y-hidden mb-2">
      <Slider {...settings}>
        {SliderData.map((imgSrc, idx) => (
          <div
            key={idx}
            style={{
              transform: idx === imageIndex ? "scale(1.1)" : "scale(0.9)",
              opacity: idx === imageIndex ? 1 : 0.5,
              transition: "transform 500ms, opacity 500ms",
              zIndex: idx === imageIndex ? 2 : 1,
            }}
            className="pt-20"
          >
            <img
              src={imgSrc}
              alt={`Slide ${idx}`}
              style={{
                width: "100%",
                height: "520px",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeCarousel;
