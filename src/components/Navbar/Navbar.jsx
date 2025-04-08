import { imgLogo, textLogo, navElements } from "../../assets/assets";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = ({ activeElem, setActiveElem }) => {
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  useEffect(() => {
    if (!isMenuHidden) {
      const handleBodyClick = () => setIsMenuHidden(true);
      document.body.addEventListener("click", handleBodyClick);
      return () => document.body.removeEventListener("click", handleBodyClick);
    }
  }, [isMenuHidden]);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuHidden(!isMenuHidden);
  };

  return (
    <div className="fixed w-full left-0 top-0 px-5 bedar-sc1:px-10 py-4 z-50">
      <div className="flex items-center justify-between px-5 bedar-sc2:px-10 bedar-sc1:px-10 border border-yellow-600 bg-[#1e1e1eeb] rounded-xl backdrop-blur-md shadow-xl">
        {imgLogo ? (
          <img src={imgLogo} className="h-10" alt="Logo" />
        ) : (
          <a
            href={`#${navElements[0]}`}
            onClick={() => setActiveElem(navElements[0])}
            className="text-lg bedar-sc2:text-3xl font-bold py-3 bedar-sc2:py-4 bedar-sc1:py-5 select-none whitespace-nowrap text-yellow-400"
          >
            {textLogo}
          </a>
        )}
        <div className="hidden bedar-sc2:flex gap-4">
          {navElements.map((elem, index) => (
            <a
              key={index}
              href={`#${elem}`}
              onClick={() => setActiveElem(elem)}
              className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                activeElem === elem
                  ? "bg-yellow-500 text-black"
                  : "text-white hover:bg-yellow-600 hover:text-black"
              }`}
            >
              {elem}
            </a>
          ))}
        </div>
        <button
          onClick={toggleMenu}
          className="text-white flex bedar-sc2:hidden"
        >
          {isMenuHidden ? (
            <RxHamburgerMenu className="h-6 w-6" />
          ) : (
            <IoClose className="h-6 w-6" />
          )}
        </button>
      </div>
      <div
        className={`mobile-menu flex fixed backdrop-blur bedar-sc2:hidden flex-col bg-[#2c2c2c] border-yellow-600 py-4 px-5 rounded-md gap-2 right-[1.22rem] top-[5rem] z-10 shadow-lg border  ${
          isMenuHidden ? "hidden" : "flex"
        }`}
      >
        {navElements.map((elem, index) => (
          <a
            href={`#${elem}`}
            key={index}
            onClick={() => setActiveElem(elem)}
            className={`border px-12 py-2 text-center rounded-md cursor-pointer text-white transition-all duration-200 ${
              activeElem === elem ? "bg-yellow-500 text-black" : "hover:bg-yellow-600 hover:text-black"
            }`}
          >
            {elem}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
