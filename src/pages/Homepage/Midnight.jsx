import React from "react";
import BackgroundImage from "../../assets/Vectorrr.png";
import Img2024 from "../../assets/2024.png";
import Container from "../../components/Container";

const Midnight = () => {
  return (
    <Container>
      <div
        className="flex items-center p-24  min-h-[600px] rounded-3xl mt-10"
        style={{
          background: `linear-gradient(90deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${BackgroundImage}) `,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-3/5">
          <h2 className="text-white text-6xl leading-tight tracking-widest mt-4 font2">
            Welcome to midnight party
          </h2>
          <p className="text-xl text-gray-300 tracking-wider mt-8">
            Dolor sit amet consectetur. Consequat eget consectetur maecenas sed
            molestie malesuada. Ipsum sed sodales risus ut pellentesque vel
            euismod.
          </p>
          <button className="text-white mt-8 text-xl">Join Now</button>
        </div>

        <div className="w-2/5 flex justify-end">
          <img src={Img2024} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Midnight;
