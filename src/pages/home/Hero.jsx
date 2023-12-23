import React from "react";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-photo/high-angle-chocolate-nut-brownies-tray_23-2148357773.jpg?w=360&t=st=1703357327~exp=1703357927~hmac=e6e12689c819db367a4a62f259af82a294c8667ccce8356985e7b7c405788a82")',
      }}
      className="h-screen  bg-no-repeat bg-cover bg-center bg-fixed"
    >
      <div className="container flex justify-center pt-32 md:pt-28 xl:pt-44">
        <div className="bg-black bg-opacity-70 p-12 md:p-16 xl:p-24 text-white flex flex-col items-center gap-10 rounded-md">
          <h2 className="italic font-semibold text-2xl">
            food lover<span>...</span>
          </h2>
          <h1 className="font-bold text-lg md:text-2xl lg:text-4xl">
            SURPRISE YOUR PLATE
          </h1>
          <h3 className="font-mono font-medium text-xl lg:text-3xl">
            Fine Food + Drinks
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
