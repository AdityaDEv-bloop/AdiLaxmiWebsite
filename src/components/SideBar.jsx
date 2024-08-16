import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="relative w-64 bg-white h-screen overflow-hidden">
      {/* Header */}
      <div className="bg-white p-4 text-center pb-8">
        <h2 className="text-2xl font-bold">RECOMMENDED</h2>
        <p className="bg-yellow-400 text-black font-bold p-1 mt-1 text-xl">
          BY ABCEDEF
        </p>
      </div>

      {/* Links Section */}
      <h3 className="text-xl font-semibold text-gray-700 bg-gray-200 pt-4 pl-4 pb-4">
        ALL COLLECTIONS
      </h3>
      <div className="p-4 h-full overflow-y-auto scrollbar-hidden">
        <ul className="space-y-1">
          <li>
            <Link
              to="/gifts-for-women"
              className="block text-sm border-t-[1px] font-semibold hover:text-[#75A500] pt-4 pl-4 pb-4"
            >
              GIFTS FOR WOMEN
            </Link>
          </li>
          <li>
            <Link
              to="/gifts-for-men"
              className="block text-sm border-t-[1px] font-semibold hover:text-[#75A500] pt-4 pl-4 pb-4"
            >
              GIFTS FOR MEN
            </Link>
          </li>
          <li>
            <Link
              to="/art-and-craft"
              className="block text-sm border-t-[1px] font-semibold hover:text-[#75A500] pt-4 pl-4 pb-4"
            >
              ART & CRAFT
            </Link>
          </li>
          <li>
            <Link
              to="/leather-dopp-kits"
              className="block text-sm border-t-[1px] font-semibold hover:text-[#75A500] pt-4 pl-4 pb-4"
            >
              LEATHER DOPP KITS
            </Link>
          </li>
          <li>
            <Link
              to="/leather-tool-kit"
              className="block text-sm border-t-[1px] font-semibold hover:text-[#75A500] pt-4 pl-4 pb-4"
            >
              LEATHER TOOL KIT
            </Link>
          </li>
          <li>
            <Link
              to="/leather-journals"
              className="block text-sm border-t-[1px] font-semibold hover:text-[#75A500] pt-4 pl-4 pb-4"
            >
              LEATHER JOURNALS
            </Link>
          </li>
          <li>
            <Link
              to="/leather-tote-bags"
              className="block text-sm border-t-[1px] font-semibold hover:text-[#75A500] pt-4 pl-4 pb-4"
            >
              LEATHER TOTE BAGS
            </Link>
          </li>
          <li>
            <Link
              to="/leather-briefcases"
              className="block text-sm border-t-[1px] font-semibold hover:text-[#75A500] pt-4 pl-4 pb-4"
            >
              LEATHER BRIEFCASES
            </Link>
          </li>
          <li>
            <Link
              to="/leather-crossbody-bags"
              className="block text-sm border-t-[1px] font-semibold hover:text-[#75A500] pt-4 pl-4 pb-4"
            >
              LEATHER CROSSBODY BAGS
            </Link>
          </li>
          <li>
            <Link
              to="/leather-business-folders"
              className="block text-sm border-t-[1px] font-semibold hover:text-[#75A500] pt-4 pl-4 pb-4"
            >
              LEATHER BUSINESS FOLDERS
            </Link>
          </li>
          <li>
            <Link
              to="/leather-pen-pencil-pouches"
              className="block text-sm border-t-[1px] font-semibold hover:text-[#75A500] pt-4 pl-4 pb-4"
            >
              LEATHER PEN/PENCIL POUCHES
            </Link>
          </li>
          <li>
            <Link
              to="/leather-duffel-travel-bags"
              className="block text-sm border-t-[1px] font-semibold hover:text-[#75A500] pt-4 pl-4 pb-4"
            >
              LEATHER DUFFEL & TRAVEL BAGS
            </Link>
          </li>
          <li>
            <Link
              to="/leather-backpacks-rucksacks"
              className="block text-sm border-t-[1px] font-semibold hover:text-[#75A500] pt-4 pl-4 pb-4"
            >
              LEATHER BACKPACKS & RUCKSACKS
            </Link>
          </li>
        </ul>
      </div>

      <style jsx>{`
        .scrollbar-hidden::-webkit-scrollbar {
          display: none; /* Chrome, Safari, and Opera */
        }

        .scrollbar-hidden {
          -ms-overflow-style: none; /* Internet Explorer and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
