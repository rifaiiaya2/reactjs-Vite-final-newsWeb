import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousel1 from "../../../assets/images/carousel1.jpg";
import carousel2 from "../../../assets/images/carousel2.jpg";
import carousel4 from "../../../assets/images/carousel4.jpg";
import "./HomeCarousel.css";

const SliderData = [carousel1, carousel2, carousel4];
const HomeCarousel = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      console.log("Window width:", window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
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
    <div className="carousel-container">
      <Slider {...settings}>
        {SliderData.map((imgSrc, idx) => (
          <div
            key={idx}
            className={idx === imageIndex ? "slide activeSlide" : "slide"}
          >
            <img
              src={imgSrc}
              alt={`Slide ${idx}`}
              className="w-full h-auto md:h-80 lg:h-[80vh] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeCarousel;
