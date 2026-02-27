import React from "react";
import appStore from "../../src/assets/downloadApp.png";
import arrow from "../../src/assets/leftArrow.png";
import Playstore from "../../src/assets/playstore.png";
import Appleloge from "../../src/assets/apple-logo.png";
const DownloadSection = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#E7F0FF] to-[#E8F1FF] py-25">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-around gap-10">
        {/* left image */}
        <div className="mb-10 md:mb-0">
          <img src={appStore} alt="appStore" className="w-[350px]" />
        </div>

        {/* Right image */}
        <div className="flex flex-col gap-4">
          <img src={arrow} alt="arrow_not_found" className="w-16" />
          <h2 className="text-3xl font-semibold font-weight-bold">
            Download the <br />
            <span className="text-[#1B3C74]">Event tracker </span> App
          </h2>
          <p className="text-black-900 font-semibold">
            Get the link download the app
          </p>
          <input
            type="text"
            placeholder="+91 Enter your phone number"
            className="flex-1 px-4 py-3 rounded-md border border-gray-200 focus:outline-none"
          />
          <button className="bg-[var(--primary-color)] text-white px-6 py-20 rounded-md hover:opacity-90 transition cursor-pointer">
            Send SMS
          </button>

          {/* store button */}
          <div className="flex gap-4 mt-4">
            <button className="bg-black text-white px-8 rounded-md cursor-pointer">
              <img src={Playstore} alt="" className="h-12 w-10" />
              Google Pay
            </button>
            <button className="bg-black text-white px-8 py-10 mb-10 rounded-md cursor-pointer">
              <img src={Appleloge} alt="" className="h-12 w-10" />
              App Store
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
