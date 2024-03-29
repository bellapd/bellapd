import React from "react";
import Image from "next/image";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

function PersonalWebV1() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-5xl font-bold mb-4 text-white italic">
        Personal Web V1
      </h1>
      <div className="container mx-auto flex flex-wrap justify-left gap-2">
        <kbd className="px-5 mr-4 py-1 text-xs sm:text-xs font-semibold text-[#F24E1E] bg-white rounded-full shadow-blur">
          React
        </kbd>
        <kbd className="px-5 mr-4 py-1 text-xs sm:text-xs font-semibold text-[#F24E1E] bg-white rounded-full shadow-blur">
          Next.js
        </kbd>
        <kbd className="px-5 mr-4 py-1 text-xs sm:text-xs font-semibold text-[#F24E1E] bg-white rounded-full shadow-blur">
          Typescript
        </kbd>
        <kbd className="px-5 mr-4 py-1 text-xs sm:text-xs font-semibold text-[#F24E1E] bg-white rounded-full shadow-blur">
          Chakra UI
        </kbd>
        <kbd className="px-5 mr-4 py-1 text-xs sm:text-xs font-semibold text-[#F24E1E] bg-white rounded-full shadow-blur">
          Vercel
        </kbd>
      </div>
      <div className="container mx-auto justify-center align-center overflow-hidden">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={42}
          totalSlides={7}
          isPlaying={true}
          interval={3000}
          className="carousel-provider"
        >
          <Slider className="carousel-slider">
            <Slide index={0} className="carousel-slide">
              <div className="carousel-image-container">
                <Image
                  src="/img1_1.png"
                  alt="1"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Slide>
            <Slide index={1}>
              <div className="carousel-image-container">
                <Image
                  src="/img1_2.png"
                  alt="2"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Slide>
            <Slide index={2}>
              <div className="carousel-image-container">
                <Image
                  src="/img1_3.png"
                  alt="3"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Slide>
            <Slide index={3}>
              <div className="carousel-image-container">
                <Image
                  src="/img1_4.png"
                  alt="4"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Slide>
            <Slide index={4}>
              <div className="carousel-image-container">
                <Image
                  src="/img1_5.png"
                  alt="5"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Slide>
            <Slide index={5}>
              <div className="carousel-image-container">
                <Image
                  src="/img1_6.png"
                  alt="6"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Slide>
            <Slide index={6}>
              <div className="carousel-image-container">
                <Image
                  src="/img1_7.png"
                  alt="7"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Slide>
          </Slider>
          <div className="flex justify-center align-center mb-5">
            <ButtonBack className="carousel-button text-3xl text-white mr-20">
              <BsArrowLeftCircle />
            </ButtonBack>
            <ButtonNext className="carousel-button text-3xl text-white">
              <BsArrowRightCircle />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>

      <div className="container mx-auto max-w-4xl mt-10">
        <p className="text-white text-lg text-justify leading-loose">
          This is where my journey in web development started. At the time, I
          was only know HTML and CSS and I wanted to learn more about web
          development. I decided to build my own personal website to showcase my
          projects and skills.
          <br />
          The design of this website is inspired by Notion. I really like the
          simplicity of Notion's design. I also like the idea of having a
          sidebar that contains all the links to the pages.
          <br />
          I used React and Next.js to build this website. I also used Chakra UI
          to style the website. Chakra UI is a great built-ins for building
          blocks that you need to build React applications. Not only that, I
          found Chakra UI arevery easy to understand for starters like me.
          <br />
          Not only for posting my projects, I also use this website to post my
          learning journey in computer science field. At that time, I was
          learning about Docker and container service in general. I wrote a blog
          post about it and posted it on this website. I also wrote a blog post
          about my experience in learning web development. I think it's a great
          way to keep track of my learning progress.
          <br />
          One special thing about this website is that I have a live spotify
          widget on the footer. When I was visiting Lee Robinson's website, I
          saw that he has a live spotify widget on his website. I think it's a
          cool idea to have a live spotify widget on a website. So I decided to
          add it to my website. The widget can show the song that is currently
          played in our spotify.
        </p>
      </div>
    </div>
  );
}

export default PersonalWebV1;
