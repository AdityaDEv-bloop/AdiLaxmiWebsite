import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const [openSections, setOpenSections] = useState({
    collections: true,
    services: false,
    information: false,
    contact: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className="mt-4">
      <hr />
      <br />
      <div className="container mx-auto">
        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-4 gap-8">
          {/* Our Collections */}
          <div>
            <h3 className="font-bold text-lg mb-2">OUR COLLECTIONS</h3>
            <ul className="text-md flex flex-col gap-2">
              <li>BRIEFCASES</li>
              <li>BACKPACKS & RUCKSACKS</li>
              <li>TOTES & HANDBAGS</li>
              <li>DUFFEL & TRAVEL BAGS</li>
              <li>DOPP KITS</li>
              <li>WALLETS & ACCESSORIES</li>
            </ul>
          </div>

          {/* Customer Services */}
          <div>
            <h3 className="font-bold text-lg mb-2">CUSTOMER SERVICES</h3>
            <ul className="text-md flex flex-col gap-2">
              <li>SHIPPING POLICY</li>
              <li>REFUND POLICY</li>
              <li>PRIVACY POLICY</li>
              <li>TERMS OF SERVICE</li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-bold text-lg mb-2">INFORMATION</h3>
            <ul className="text-md flex flex-col gap-2">
              <li>FAQ</li>
              <li>OUR STORY</li>
              <li>CONTACT US</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-2">NAME SURENAME</h3>
            <ul>
              <li>
                <FaMapMarkerAlt className="inline-block mr-2" />
                Address ABC, xyz
              </li>
              <li>
                <FaEnvelope className="inline-block mr-2" />
                support@abc.com
              </li>
              <li className="mt-4 flex space-x-4">
                <FaTwitter />
                <FaFacebookF />
                <FaPinterestP />
                <FaInstagram />
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden p-8">
          {/* Our Collections */}
          <div>
            <div
              className="flex justify-between items-center py-2 border-b"
              onClick={() => toggleSection("collections")}
            >
              <h3 className="font-bold text-lg">OUR COLLECTIONS</h3>
              {openSections.collections ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openSections.collections && (
              <ul className="pl-4 py-2">
                <li>BRIEFCASES</li>
                <li>BACKPACKS & RUCKSACKS</li>
                <li>TOTES & HANDBAGS</li>
                <li>DUFFEL & TRAVEL BAGS</li>
                <li>DOPP KITS</li>
                <li>WALLETS & ACCESSORIES</li>
              </ul>
            )}
          </div>

          {/* Customer Services */}
          <div>
            <div
              className="flex justify-between items-center py-2 border-b"
              onClick={() => toggleSection("services")}
            >
              <h3 className="font-bold text-lg">CUSTOMER SERVICES</h3>
              {openSections.services ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openSections.services && (
              <ul className="pl-4 py-2">
                <li>SHIPPING POLICY</li>
                <li>REFUND POLICY</li>
                <li>PRIVACY POLICY</li>
                <li>TERMS OF SERVICE</li>
              </ul>
            )}
          </div>

          {/* Information */}
          <div>
            <div
              className="flex justify-between items-center py-2 border-b"
              onClick={() => toggleSection("information")}
            >
              <h3 className="font-bold text-lg">INFORMATION</h3>
              {openSections.information ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openSections.information && (
              <ul className="pl-4 py-2">
                <li>FAQ</li>
                <li>OUR STORY</li>
                <li>CONTACT US</li>
              </ul>
            )}
          </div>

          {/* Contact */}
          <div>
            <div
              className="flex justify-between items-center py-2 border-b"
              onClick={() => toggleSection("contact")}
            >
              <h3 className="font-bold text-lg">NAME SURENAME</h3>
              {openSections.contact ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openSections.contact && (
              <ul className="pl-4 py-2">
                <li>
                  <FaMapMarkerAlt className="inline-block mr-2" />
                  Address ABC, xyz
                </li>
                <li>
                  <FaEnvelope className="inline-block mr-2" />
                  support@abc.com
                </li>
                <li className="mt-4 flex space-x-4">
                  <FaTwitter />
                  <FaFacebookF />
                  <FaPinterestP />
                  <FaInstagram />
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-between bg-zinc-800 text-white px-8 py-4" >
        <h1>© 2024 Name Passion leather</h1>
        <div className='flex gap-4'>
            Cards
            Cards
            Cards
            Cards
        </div>
      </div>
    </footer>
  );
};

export default Footer;
