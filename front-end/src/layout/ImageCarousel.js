import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Divider } from "semantic-ui-react";
import CustomDotGroup from "./CustomComponent/CustomDotGroup";

function ImageCarousel() {
  return (
    <CarouselProvider
      naturalSlideWidth={1}
      naturalSlideHeight={1}
      totalSlides={3}
    >
      <Slider>
        <Slide tag="a" index={0}>
          <Image src="https://www.cataloniahotels.com/en/blog/wp-content/uploads/2023/03/bavaro-beach-768x432.jpg" />
        </Slide>
        <Slide tag="a" index={1}>
          <Image src="https://lorempixel.com/800/800/cats/1" />
        </Slide>
        <Slide tag="a" index={2}>
          <Image src="https://lorempixel.com/800/800/cats/2" />
        </Slide>
      </Slider>

      <Divider />
      <CustomDotGroup slides={3} />
    </CarouselProvider>
  );
}

export default ImageCarousel;
