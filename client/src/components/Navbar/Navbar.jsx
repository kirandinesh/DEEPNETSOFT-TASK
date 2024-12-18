import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "/src/assets/TopBarLogo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-[#121618] h-16 flex items-center justify-end fixed top-0 z-50">
      {/* Mobile Menu Icon */}
      <Menu
        className="text-white lg:hidden cursor-pointer mr-4"
        onClick={() => setMenuOpen(!menuOpen)}
      />

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#121618] flex flex-col items-center py-4 lg:hidden">
          <ul className="text-white space-y-4">
            <li className="cursor-pointer">HOME</li>
            <li className="cursor-pointer text-[#0796EF]">MENU</li>
            <li className="cursor-pointer">MAKE A RESERVATION</li>
            <li className="cursor-pointer">CONTACT US</li>
          </ul>
          <X
            className="text-white cursor-pointer mt-4"
            onClick={() => setMenuOpen(false)}
          />
        </div>
      )}

      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-between w-full px-24 relative">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 absolute top-2">
            <img
              src={Logo}
              alt="Deep Net Soft Logo"
              className="w-[86px] h-[76px]"
            />
            <div className="text-white font-title flex flex-col font-normal text-[30px] leading-8">
              <span>
                <span className="text-[#0796EF]">DEEP</span> NET
              </span>
              <span className="text-[#857878]">SOFT</span>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <ul className="text-white flex space-x-8 font-title text-base">
            <li className="cursor-pointer">HOME</li>
            <li className="cursor-pointer text-[#0796EF]">MENU</li>
            <li className="cursor-pointer">MAKE A RESERVATION</li>
            <li className="cursor-pointer">CONTACT US</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
