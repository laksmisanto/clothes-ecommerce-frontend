import Navigation from "./customer/components/Navigation/Navigation";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeSectionCarousel from "./customer/HomeSectionCarousel/HomeSectionCarousel";
import MainCarousel from "./customer/components/HomeCarousel/MainCarousel";

function App() {
  return (
    <>
      <Navigation />
      <MainCarousel />
      <HomeSectionCarousel />
    </>
  );
}

export default App;
