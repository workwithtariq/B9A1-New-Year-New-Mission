import React from "react";
import Container from "../../components/Container";
import ImgGiftBox from "../../assets/gift-box.png";
import Img50 from "../../assets/50.png";
import ImgGirlRed from "../../assets/girl-red.png";
import ImgBgRedBottom from "../../assets/bg-red-bottom.png";


const Holiday = () => {
  return (
    <Container>
      {/* Text section */}
      <div className="text-center w-full sm:w-3/4 lg:w-3/5 text-start sm:text-center mx-auto mt-32">
        <h3 className="font-medium text-xl md:text-2xl uppercase text-[#070211]">What is Funtional</h3>
        <h2 className="font-bold font2 text-3xl md:text-6xl text-[#ff0000] mt-8">
          Holidays <span className="text-[#070211]">Sale 50%</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 tracking-wider mt-8">
          Dolor sit amet consectetur. Consequat eget consectetur maecenas sed
          molestie malesuada. Ipsum sed sodales risus ut pellentesque vel
          euismod.
        </p>
      </div>
      {/* Image Section */}
      <div className="hidden md:grid grid-cols-6 items-center mt-24">
        <div className="col-start-1 col-end-4 -mb-72 z-10"><img src={ImgGiftBox} alt="" /></div>
        <div className="col-start-4 col-end-5 scale-150 translate-x-24"><img src={Img50} alt="" /></div>
        <div className="col-start-5 col-end-7"><img className="w-full" src={ImgGirlRed} alt="" /></div>
        <div className="col-start-1 col-end-7" ><img src={ImgBgRedBottom} alt="" /></div>
      </div>
    </Container>
  );
};

export default Holiday;
