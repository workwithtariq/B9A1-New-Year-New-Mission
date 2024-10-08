import React from "react";
import Container from "../../components/Container";
import ImgMail from "../../assets/mail.png";

const NewsLetter = () => {
  return (
    <Container>
      <div className="bg-[#f002] rounded-3xl mt-32 p-4 md:p-12">
        <div className="text-center flex flex-col items-center w-full md:w-3/4 mx-auto text-start sm:text-center">
          <img src={ImgMail} alt="" />
          <h2 className="font-bold font2 text-3xl sm:text-6xl text-[#070211] mt-8">
            Subscribe Newsletter
          </h2>
          <p className="text-gray-600 tracking-wider mt-8 text-lg sm:text-xl">
            Dolor sit amet consectetur. Consequat eget consectetur maecenas sed
            molestie malesuada. Ipsum sed sodales risus ut pellentesque vel
            euismod.
          </p>
        </div>
        {/* Input container */}
        <div className="">
          <div className="flex bg-white w-full sm:w-[400px] md:w-[648px] rounded-full overflow-hidden mx-auto mt-16">
            <input
              className="w-full outline-none p-2 md:p-6 text-xl"
              type="email"
              name=""
              id=""
              placeholder="email@domain.com"
            />
            <button className="w-24 md:w-72 bg-[#f00] p-2 md:p-6 text-md md:text-xl text-white">Subscribe</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NewsLetter;
