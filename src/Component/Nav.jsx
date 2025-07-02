// npm install @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className={`fixed top-0 z-50 flex items-center justify-between font-bold transition-all duration-500 px-4 border-0 
        ${isOpen ? "rounded-b-none" : ""}
        ${
          isScrolled
            ? "left-1/2 transform -translate-x-1/2 mt-2 w-[99%] rounded-xl backdrop-blur-md bg-gray-800/50"
            : "w-full bg-gray-900/70 left-0 transform-none"
        }`}
      >
        {/* Logo */}
        <Link to="/">
          <button className="flex h-full w-full lg:w-70 content-center flex-grow lg:flex-grow-0 p-1">
            <img
              src="https://cdn3.iconfinder.com/data/icons/user-interface-798/32/User_interface_briefcase_suitcase_portofolio_bag_business-256.png"
              alt="CodePolitan Logo"
              className="w-10"
            />
            <h1 className="flex items-center pl-2 text-sky-200">PORTOFOLIO</h1>
          </button>
        </Link>

        {/* Hamburger (mobile only) */}
        <div className="lg:hidden flex">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center border-none"
          >
            <FontAwesomeIcon icon={faBars} className="text-white w-6 h-6" />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="flex-grow hidden lg:flex justify-end items-center space-x-4">
          {["about", "skill", "work", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => (window.location.href = `#${item}`)}
              className="btn-nav text-white w-20 h-full hover:text-blue-600 hover:scale-110 duration-200 ease-in-out"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          <button className="text-blue-400 hover:text-blue-700 hover:scale-110 duration-200 ease-in-out">
            Send E-mail
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 z-40 transition-[max-height] duration-500 ease-in-out backdrop-blur-md bg-gray-800/50 flex flex-col items-center font-bold lg:hidden overflow-hidden border-0 rounded-b-2xl ${
          isOpen ? "max-h-96 py-4 top-10" : "max-h-0 py-0 top-10"
        } ${
          isScrolled
            ? "left-1/2 transform -translate-x-1/2 mt-2 w-[99%] backdrop-blur-md bg-gray-800/50"
            : "w-full bg-gray-900/70 left-0 transform-none"
        }`}
      >
        {["about", "skill", "work", "contact"].map((item) => (
          <button
            key={item}
            onClick={() => (window.location.href = `#${item}`)}
            className="btn-nav block text-white w-full hover:bg-gray-600 hover:scale-110 duration-200 ease-in-out m-0"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
        <button className="w-full text-blue-300 hover:bg-gray-600 hover:scale-110 duration-200 m-0 ease-in-out">
          Send E-mail
        </button>
      </div>
    </>
  );
}
