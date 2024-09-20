import React from "react";
import Container from "../../components/Container";

const Schedule = () => {
  return (
    <Container>
      <div className="flex justify-center items-center bg-gradient-to-b from-rose-200 to-white min-h-[482px] rounded-3xl mt-32">
        <div className="text-center">
          <div className="text-3xl flex flex-col text-[#070211] gap-6 font-bold tracking-wider">
            <h3>
              <span className="text-[#ff0000]">Place:</span> New Park Hotel
            </h3>
            <h3>
              <span className="text-[#ff0000]">Date:</span> 31 December Night
              2023
            </h3>
            <h3>
              <span className="text-[#ff0000]">Time:</span> Evening 7.30 pm to
              12.30 am
            </h3>
          </div>
          <button className="mt-16 bg-[#ff0000] px-8 py-4 rounded-xl text-xl text-white uppercase">
            Join Now
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Schedule;
