import React, { useState } from "react";
import {
  HiOutlineShoppingBag,
  HiOutlineMenu,
  HiOutlineX,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-slate-200 px-8">
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center w-[22vw]">
          <img src="" alt="Logo" className="h-8 w-8" />
          <p className="ml-2 text-xl font-bold">Logo</p>
        </div>
        <div className="hidden md:flex w-[80vw] items-center justify-between uppercase font-bold">
          <Link to="/" className="hover:text-[#75A500] font-semibold text-sm">
            Home
          </Link>
          <Link
            to="/messangersbags"
            className="hover:text-[#75A500] font-semibold text-sm"
          >
            Messengers Bags
          </Link>
          <Link to="/totes" className="hover:text-[#75A500] font-semibold text-sm">
            Totes
          </Link>
          <Link to="/backpacks" className="hover:text-[#75A500] font-semibold text-sm">
            Backpacks
          </Link>
          <Link to="/duffel-bags" className="hover:text-[#75A500] font-semibold text-sm">
            Duffel Bags
          </Link>
          <Link to="/dopp-kits" className="hover:text-[#75A500] font-semibold text-sm">
            Dopp Kits
          </Link>
          <Link to="/journals" className="hover:text-[#75A500] font-semibold text-sm">
            Journals
          </Link>
          <Link
            to="/cart"
            className="hover:text-[#75A500] font-semibold text-sm"
            onClick={toggleMenu}
          >
            {" "}
            <HiOutlineShoppingBag className="text-xl cursor-pointer" />
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-xl">
            {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden z-[200] transition-transform duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center justify-center space-y-4 uppercase font-bold py-4">
          <Link
            to="/"
            className="hover:text-[#75A500] font-semibold text-sm"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/messangersbags"
            className="hover:text-[#75A500] font-semibold text-sm"
            onClick={toggleMenu}
          >
            Messengers Bags
          </Link>
          <Link
            to="/totes"
            className="hover:text-[#75A500] font-semibold text-sm"
            onClick={toggleMenu}
          >
            Totes
          </Link>
          <Link
            to="/backpacks"
            className="hover:text-[#75A500] font-semibold text-sm"
            onClick={toggleMenu}
          >
            Backpacks
          </Link>
          <Link
            to="/duffel-bags"
            className="hover:text-[#75A500] font-semibold text-sm"
            onClick={toggleMenu}
          >
            Duffel Bags
          </Link>
          <Link
            to="/dopp-kits"
            className="hover:text-[#75A500] font-semibold text-sm"
            onClick={toggleMenu}
          >
            Dopp Kits
          </Link>
          <Link
            to="/journals"
            className="hover:text-[#75A500] font-semibold text-sm"
            onClick={toggleMenu}
          >
            Journals
          </Link>
          <Link
            to="/cart"
            className="hover:text-[#75A500] font-semibold text-sm"
            onClick={toggleMenu}
          >
            {" "}
            <HiOutlineShoppingBag className="text-xl cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
