import React from "react";
import logo from "../../assets/logo.png";
import fb from "../../assets/fb.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import printed from "../../assets/print.png";
const Footer = () => {
  return (
    <footer className="w-full bg-[var(--primary-color)] text-white py-25">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* top section */}
        <div className="flex flex-col md:flex-row md:justify-between items-start gap-12">
          {/* logo + section */}
          <div>
            <img src={logo} alt="Event logo" className="w-32 mb-6" />
            <div className="flex gap-4">
              <img src={fb} alt="fb logo" className="w-8 h-8 cursor-pointer" />
              <img
                src={twitter}
                alt="twitter logo"
                className="w-8 h-8 cursor-pointer"
              />
              <img
                src={youtube}
                alt="youtube logo"
                className="w-8 h-8 cursor-pointer"
              />
              <img
                src={printed}
                alt="printed logo"
                className="w-8 h-8 cursor-pointer"
              />
            </div>
          </div>

          <div className="flex justify-between items-right p-5">
            {/* columm1 */}
            <ul className="space-y-3">
              <li className="hover:underline cursor-pointer">&gt;AboutUs</li>
              <li className="hover:underline cursor-pointer">&gt;Princing</li>
              <li className="hover:underline cursor-pointer">&gt;Gallery</li>
              <li className="hover:underline cursor-pointer">&gt;Contact Us</li>
              <li>&gt;Privacy Policy</li>
            </ul>
            {/* columm2*/}
            <ul className="space-y-3">
              <li>&gt;Event Management</li>
              <li>&gt;Real-time Tracking</li>
              <li>&gt;Customizable Features</li>
              <li>&gt;Support</li>
              <li>&gt;Security</li>
            </ul>
            {/* columm3*/}
            <ul className="space-y-3">
              <li>&gt;About Us</li>
              <li>&gt;Princing</li>
              <li>&gt;Gallery</li>
              <li>&gt;Contact Us</li>
              <li>&gt;Privacy Policy</li>
            </ul>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-white/30 my-8"></div>
        {/* bottom copyright section */}
        <p className="text-sm text-white/80 text-left px-15">
          copyright©2025 EventTracker.com. AllRightReserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
