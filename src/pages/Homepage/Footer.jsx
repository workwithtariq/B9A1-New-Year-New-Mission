import React from "react";
import Container from "../../components/Container";
import ImgFacebook from "../../assets/Facebook.png";
import ImgInsta from "../../assets/Instagram.png";
import ImgX from "../../assets/Twitter.png";
import ImgLinkedIn from "../../assets/Linkedin.png";
import ImgCall from "../../assets/Call.png";
import ImgWebsite from "../../assets/Website.png";

const Footer = () => {
  return (
    <div className="bg-[#070211]">
      <Container>
        <div className="text-white py-32 mt-32">
          {/* section 1 */}
          <div className="flex flex-col gap-8 md:flex-row justify-between">
            {/*  Address */}
            <div>
              <p className="text-md sm:text-xl max-w-96">
                44, Big Building Roosevelt Street Beach Gardens Florida 33410
              </p>
            </div>
            {/* Contact */}
            <div className="mr-24 flex flex-col gap-2">
              <a className="text-md sm:text-xl  flex gap-2" href="tel:+8801243667755">
                <span>
                  <img src={ImgCall} alt="" />
                </span>
                +8801243667755
              </a>

              <a
                href="https://www.workwithtariq.com"
                className="text-md sm:text-xl  flex gap-2"
              >
                <span>
                  <img src={ImgWebsite} alt="" />
                </span>
                www.workwithtariq.com
              </a>
            </div>
          </div>

          <hr className="border-gray-700 my-10" />
          {/* section 2 */}
          <div className="flex gap-6 justify-center">
            <a href="https://facebook.com/workwithtariq">
              <img src={ImgFacebook} alt="" />
            </a>
            <a href="https://instagram.com/workwithtariq">
              <img src={ImgInsta} alt="" />
            </a>
            <a href="https://linkedin.com/u/workwithtariq">
              <img src={ImgLinkedIn} alt="" />
            </a>
            <a href="https://x.com/workwithtariq">
              <img src={ImgX} alt="" />
            </a>
          </div>

          <hr className="border-gray-700 my-10" />
          {/* section 3 */}
          <div className="flex flex-col gap-8 md:flex-row justify-between">
            {/*  Address */}
            <div>
              <p className="text-md sm:text-xl ">
                All rights reserved, &copy; WorkWithTariq, 2024
              </p>
            </div>
            {/* Contact */}
            <div>
              <button className="text-md sm:text-xl ">Unsubscribe</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
