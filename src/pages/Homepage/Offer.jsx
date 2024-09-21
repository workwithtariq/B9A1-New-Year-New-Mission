import React from "react";
import Container from "../../components/Container";
import ImgHNY from "../../assets/happy-new-year.png";
import ImgEllipseHNY from "../../assets/Ellipse-HNY.png";

const Offer = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-10 items-center justify-items-center mt-32">
        {/* section 1 */}
        <div className="md:col-start-1 md:col-end-7 lg:col-start-1 lg:col-end-3">
          <h3 className="font-medium text-xl sm:text-2xl text-[#ff0000]">
            NET BEST OFFER
          </h3>
          <h2 className="font-bold font2 text-3xl sm:text-6xl text-[#070211] mt-8">
            Coming Soon
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 tracking-wider mt-8">
            Dolor sit amet consectetur. Consequat eget consectetur maecenas sed
            molestie malesuada. Ipsum sed sodales risus ut pellentesque vel
            euismod.
          </p>
        </div>
        {/* section 2 */}
        <div className="md:col-start-1 md:col-end-4 lg:col-start-3 lg:col-end-5">
          <div className="inline-block border border-[#ff0000] border-[16px] rounded-full p-3 sm:p-4 md:p-6">
          <img src={ImgEllipseHNY} alt="" />
          </div>
        </div>
        {/* section 3 */}
        <div className="md:col-start-4 md:col-end-7 lg:col-start-5 lg:col-end-7">
        <h3 className="font-bold text-5xl text-[#ff0000]">
            2024
          </h3>
          <p className="text-gray-600 tracking-wider mt-6">
            Dolor sit amet consectetur. Consequat eget consectetur maecenas sed
            molestie malesuada. Ipsum sed sodales risus ut pellentesque vel
            euismod.
          </p>
          <img className="mt-10" src={ImgHNY} alt="" />

        </div>
      </div>
    </Container>
  );
};

export default Offer;
