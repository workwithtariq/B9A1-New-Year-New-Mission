import React from "react";
import Container from "../../components/Container";
import ImgBag1 from "../../assets/bag1.png";
import ImgBag2 from "../../assets/bag2.png";
import ImgShoe1 from "../../assets/shoe1.png";
import ImgShoe2 from "../../assets/shoe2.png";
import ImgGlass from "../../assets/glass.png";
import ImgBracelet from "../../assets/bracelet.png";

const Portfolio = () => {
  return (
    <Container>
      <div>
        {/* Text section */}
        <div className="mt-32 w-full md:w-3/4">
          <h3 className="font-medium text-2xl text-[#ff0000]">
            THE BEST GIFTS
          </h3>
          <h2 className="font-bold font2 text-3xl md:text-6xl text-[#070211] mt-8">
            Our Awesome Portfolio
          </h2>
          <p className="text-xl text-gray-600 tracking-wider mt-8">
            Dolor sit amet consectetur. Consequat eget consectetur maecenas sed
            molestie malesuada. Ipsum sed sodales risus ut pellentesque vel
            euismod.
          </p>
        </div>
        {/* Grid section */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6">
          <div>
            <img className="w-full" src={ImgBag1} alt="" />
          </div>
          <div>
            <img className="w-full" src={ImgBag2} alt="" />
          </div>
          <div>
            <img className="w-full" src={ImgShoe1} alt="" />
          </div>
          <div>
            <img className="w-full" src={ImgShoe2} alt="" />
          </div>
          <div>
            <img className="w-full" src={ImgGlass} alt="" />
          </div>
          <div>
            <img className="w-full" src={ImgBracelet} alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Portfolio;
