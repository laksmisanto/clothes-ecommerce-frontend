import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { HomeSectionSliderData } from "../../data";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Container from "../../components/container/Container";
import { useState } from "react";

const AliceDamiCarousel = () => {
  const mobile = 1;
  const tablet = 3;
  const desktop = 5;

  const responsive = {
    0: { items: mobile },
    720: { items: tablet },
    1024: { items: desktop },
  };
  const items = HomeSectionSliderData.map((item, i) => (
    <HomeSectionCard data={item} key={i} />
  ));

  const renderNextButton = ({ isDisabled }) => {
    console.log("Next Btn", isDisabled);
    if (!isDisabled) {
      return (
        <KeyboardArrowRightIcon
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            background: "orange",
            color: "white",
            padding: "14px 24px",
          }}
        />
      );
    }
  };

  const renderPrevButton = ({ isDisabled }) => {
    console.log("Prev Btn", isDisabled);
    if (!isDisabled) {
      return (
        <KeyboardArrowLeftIcon
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            background: "orange",
            color: "white",
            padding: "14px 24px",
          }}
        />
      );
    }
  };

  return (
    <>
      <Container>
        <div className="home__section__carousel w-full h-full relative">
          <AliceCarousel
            mouseTracking
            disableDotsControls
            animationType="fadeout"
            animationDuration={200}
            infinite={false}
            items={items}
            responsive={responsive}
            renderPrevButton={renderPrevButton}
            renderNextButton={renderNextButton}
          />
        </div>
      </Container>
    </>
  );
};

export default AliceDamiCarousel;
