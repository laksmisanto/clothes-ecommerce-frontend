import Slider from "react-slick";
import { HomeSectionSliderData } from "../../data";
import Container from "../../components/container/Container";
import NextArrow from "../../components/NextArrow/NextArrow";
import PrevArrow from "../../components/PrevArrow/PrevArrow";
import "./HomeSectionCarousel.css";

const HomeSectionCarousel = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <Container className="pt-8 relative">
        <div className="home__section__carousel">
          <Slider {...settings}>
            {HomeSectionSliderData.map((item, i) => (
              <div key={i}>
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt="banner slide image"
                />
                <div className="p-3">
                  <h3 className="font-sans font-semibold text-xl text-gray-900 pb-2">
                    {item.name}
                  </h3>
                  <p className="font-sans text-base text-gray-800">
                    {item.tag}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
      <Container className="pt-8 relative">
        <div className="home__section__carousel">
          <Slider {...settings}>
            {HomeSectionSliderData.map((item, i) => (
              <div key={i}>
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt="banner slide image"
                />
                <div className="p-3">
                  <h3 className="font-sans font-semibold text-xl text-gray-900 pb-2">
                    {item.name}
                  </h3>
                  <p className="font-sans text-base text-gray-800">
                    {item.tag}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </>
  );
};

export default HomeSectionCarousel;
