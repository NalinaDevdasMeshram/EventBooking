import React from "react";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="text-gray-900">
      {/*Top Banner*/}
      <div className="text-center text-white py-2 bg-[var(--primary-color)]">
        Stay updated with the latest events and maximize your exposure with our
        platform.
      </div>

      {/* Navbar */}
      <nav className="h-20 flex items-center justify-between px-6 bg-[var(--secondary-color)]">
        <img src={logo} alt="refresh" className="w-20 h-25" />
        <div className="flex space-between gap-8 font-medium  cursor-pointer">
          <a href="#" className="hover:underline">
            Find Events
          </a>
          <a href="#" className="hover:underline">
            Venues
          </a>
          <a href="#" className="hover:underline">
            Tickets
          </a>
          <a href="#" className="hover:underline">
            workshops
          </a>
          <a href="#" className="hover:underline">
            Event Management Service
          </a>
          <a href="#" className="hover:underline">
            Services
          </a>
          <button className="px-2 py-2 text-white rounded-lg    cursor-pointer bg-[var(--primary-color)]">
            My Booking
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
