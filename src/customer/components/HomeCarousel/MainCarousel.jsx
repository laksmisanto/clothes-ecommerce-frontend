import AliceCarousel from "react-alice-carousel";
import { BannerSliderData } from "../../../data";
import "./MainCarousel.css";

const MainCarousel = () => {
  let items = BannerSliderData.map((item, i) => (
    <img
      key={i}
      className="w-full h-[93vh] object-cover cursor-pointer"
      src={item.image}
      alt="banner image"
      role="presentation"
    />
  ));

  return (
    <>
      <div className="home_section_carousel w-full h-full">
        <AliceCarousel
          autoPlay
          infinite
          autoPlayInterval={3000}
          animationDuration={1000}
          animationType="fadeout"
          items={items}
          disableButtonsControls
        />
      </div>
    </>
  );
};

export default MainCarousel;
