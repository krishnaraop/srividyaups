import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

import img1 from "./assets/IMG20220815092337.jpg";
import img2 from "./assets/IMG20220815092403.jpg";
import img3 from "./assets/IMG20220815093054.jpg";
const items = [
  {
    src: img1,
    altText: "I-Day",
    caption: "Parade Rally On Republic Day",
    key: 1,
  },
  {
    src: img2,
    altText: "Slide 2",
    caption: "Band Troop of Sri Vidya Kids",
    key: 2,
  },
  {
    src: img3,
    altText: "Slide 3",
    caption: "Traditional Wear For Independence Day Celebrations",
    key: 3,
  },
];

function Slider1(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="imageSlide" />
        <CarouselCaption
          // captionText={item.caption}
          className="carousalHeading"
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div className="sliderMain">
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
}

export default Slider1;
