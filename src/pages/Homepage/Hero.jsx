import React from "react";
import BackgroundImage from "../../assets/Banner-Image.png";
import Container from "../../components/Container";

const Hero = () => {
  return (
    <Container>
    <div
      className="flex justify-center items-center bg-no-repeat bg-cover min-h-[300px] sm:min-h-[450px] md:min-h-[600px] bg-[length:100%_100%] text-center rounded-3xl mt-10"
      style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BackgroundImage})` }}
    >
      <div className="">
        <h2 className="text-white text-xl md:text-2xl font2">Happy New Year</h2>
        <h1 className="text-white text-3xl sm:text-5xl md:text-7xl leading-tight mt-4 font2">
          New Year Party <br /> Celebration
        </h1>
      </div>
    </div>
    </Container>
  );
};

export default Hero;
