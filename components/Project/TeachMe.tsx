import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

function TeachMe() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-5xl font-bold mb-4 text-white italic">
        <Link href="https://teachme-ss.vercel.app/">Teach Me</Link>
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
          Clerk
        </kbd>
        <kbd className="px-5 mr-4 py-1 text-xs sm:text-xs font-semibold text-[#F24E1E] bg-white rounded-full shadow-blur">
          Tailwind css
        </kbd>
        <kbd className="px-5 mr-4 py-1 text-xs sm:text-xs font-semibold text-[#F24E1E] bg-white rounded-full shadow-blur">
          Vercel
        </kbd>
      </div>
      <div className="container mx-auto justify-center align-center overflow-hidden">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={42}
          totalSlides={8}
          
          className="carousel-provider"
        >
          <Slider className="carousel-slider">
            <Slide index={0} className="carousel-slide">
              <div className="carousel-image-container">
                <Image
                  src="/img2_1.png"
                  alt="1"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Slide>
            <Slide index={1}>
              <div className="carousel-image-container">
                <Image
                  src="/img2_2.png"
                  alt="2"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Slide>
            <Slide index={2}>
              <div className="carousel-image-container">
                <Image
                  src="/img2_3.png"
                  alt="3"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Slide>
            <Slide index={3}>
              <div className="carousel-image-container">
                <Image
                  src="/img2_4.png"
                  alt="4"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Slide>
            <Slide index={4}>
              <div className="carousel-image-container">
                <Image
                  src="/img2_5.png"
                  alt="5"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Slide>
            <Slide index={5}>
              <div className="carousel-image-container">
                <Image
                  src="/img2_6.png"
                  alt="6"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Slide>
            <Slide index={6}>
              <div className="carousel-image-container">
                <Image
                  src="/img2_7.png"
                  alt="7"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Slide>
            <Slide index={7}>
              <div className="carousel-image-container">
                <Image
                  src="/img2_8.png"
                  alt="8"
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
          n my third year of college, during a software lab class, my classmates
          and I encountered a common challenge as international students
          studying abroad: language barriers. Learning complex materials became
          increasingly difficult when we struggled with understanding the
          language. To compound the issue, most of the tutors and teaching
          assistants on campus primarily spoke Chinese and had limited
          proficiency in English. It was clear that we needed a solution. That's
          when we decided to build an app called 'Teach Me.'
          <br />
          Teach Me is a platform designed to connect students with tutors who
          can help them with their studies. To create a seamless user
          experience, we integrated Clerk for the sign-in and sign-up features
          on our website. Clerk proved to be an excellent choice because of its
          simplicity and ease of customization. It allowed us to quickly
          implement secure user authentication without reinventing the wheel.
          <br />
          In addition to the convenient authentication system, we also wanted to
          ensure a visually appealing and responsive design for our app. To
          achieve this, I decided to explore Tailwind CSS. Tailwind CSS provided
          a robust set of utility classes and an intuitive way to style our app.
          It allowed us to create a beautiful user interface while maintaining
          flexibility and scalability. Through Teach Me, students can easily
          find tutors who are proficient in English and other languages, helping
          them overcome language barriers and excel in their studies. The
          combination of Clerk for authentication and Tailwind CSS for styling
          has made Teach Me a user-friendly and visually appealing platform that
          facilitates effective learning for students.
        </p>
      </div>
    </div>
  );
}

export default TeachMe;
