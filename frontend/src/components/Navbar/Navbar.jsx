import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export const NavbarLinks = [
  { name: "Home", link: "/" },
  { name: "Blogs", link: "/blogs" },
  // { name: "Journey", link: "/journey" },
  { name: "About", link: "/about" },
  { name: "Booking", link: "/booking" },
];

const DropdownLinks = [
  { name: "Our Services", link: "/#services" },
  { name: "Top Brands", link: "/#mobile_brands" },
  { name: "Location", link: "/#location" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="fixed top-0 py-2 right-0 w-full z-50 bg-white text-white backdrop-blur-sm shadow-md">
      <div className="container py-1 sm:py-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 font-bold text-2xl">
            <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="" className="h-[45px]" />
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              {NavbarLinks.map((item) => (
                <li key={item.name} className="py-4">
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      isActive
                        ? "text-orange-500 border-b-2 font-semibold border-orange-500 pb-1"
                        : "text-black hover:text-orange-400"
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
              <li className="group relative cursor-pointer">
                {/* <a href="/#home" className="flex h-[72px] items-center gap-[2px]">
                  Quick Links <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </a> */}
                <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md">
                  <ul className="space-y-3">
                    {DropdownLinks.map((data) => (
                      <li key={data.name}>
                        <a
                          className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                          href={data.link}
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <Link to="booking">
              <button
                className="border-none bg-orange-600 text-white hover:bg-orange-700 transition-all duration-300 px-8 py-2 rounded-full"
                // onClick={() => handleOrderPopup()}
              >
                Register Now
              </button>
            </Link>
            <div className="md:hidden block">
              {showMenu ? (
                <HiX
                  onClick={toggleMenu}
                  className="cursor-pointer text-black transition-all"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer text-black  transition-all"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
    </nav>
  );
};

export default Navbar;
