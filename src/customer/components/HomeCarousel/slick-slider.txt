import Slider from "react-slick";
import { BannerSliderData } from "../../../data";

const MainCarousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    duration: 500,
  };
  return (
    <>
      <div>
        <Slider {...settings}>
          {BannerSliderData.map((item, i) => (
            <div className="h-[92vh]" key={i}>
              <img
                className="w-full h-full object-cover"
                src={item.img}
                alt="banner slide image"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default MainCarousel;
