import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Container from "../../components/container/Container";

const HomeSectionCarousel = ({ data, categoryName }) => {
  const mobile = 1;
  const tablet = 3;
  const desktop = 5;

  const responsive = {
    0: { items: mobile },
    720: { items: tablet },
    1024: { items: desktop },
  };
  const items = data.map((item, i) => (
    <HomeSectionCard product={item} key={i} />
  ));

  const handleNextSlide = ({ isDisabled }) => {
    console.log("Next Btn", isDisabled);
    if (!isDisabled) {
      return (
        <button
          className=" absolute text-white px-2 py-4 rounded bg-teal-800 right-0 top-2/4 -translate-y-2/4"
          aria-label="next"
        >
          <KeyboardArrowRightIcon />
        </button>
      );
    }
  };

  const handlePrevSlide = ({ isDisabled }) => {
    console.log("Prev Btn", isDisabled);
    if (!isDisabled) {
      return (
        <button
          className=" absolute text-white px-2 py-4 rounded bg-teal-800 left-0 top-2/4 -translate-y-2/4"
          aria-label="prev"
        >
          <KeyboardArrowLeftIcon />
        </button>
      );
    }
  };

  return (
    <>
      <Container>
        <div className="home__section__carousel w-full h-full relative block">
          <h2 className="font-sans font-bold text-2xl text-gray-800 pb-8">
            {categoryName}
          </h2>
          <AliceCarousel
            mouseTracking
            disableDotsControls
            animationType="fadeout"
            animationDuration={500}
            infinite={false}
            items={items}
            responsive={responsive}
            renderPrevButton={handlePrevSlide}
            renderNextButton={handleNextSlide}
          />
        </div>
      </Container>
    </>
  );
};

export default HomeSectionCarousel;
