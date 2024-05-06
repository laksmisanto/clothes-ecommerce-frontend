import { HomeSectionSliderData } from "../../../data";
import HomeSectionCarousel from "../../HomeSectionCarousel/HomeSectionCarousel";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";

const HomePage = () => {
  return (
    <>
      <MainCarousel />
      <div className="pt-12">
        <HomeSectionCarousel
          data={HomeSectionSliderData}
          categoryName={"Women Cloth"}
        />
        <HomeSectionCarousel
          data={HomeSectionSliderData}
          categoryName={"Men Cloth"}
        />
      </div>
    </>
  );
};

export default HomePage;
