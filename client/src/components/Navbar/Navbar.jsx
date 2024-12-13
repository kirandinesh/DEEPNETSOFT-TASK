import { Menu } from "lucide-react";

function Navbar() {
  return (
    <div className="w-full bg-[#121618] h-10 flex items-center justify-end fixed top-0 z-50 ">
      <Menu className="text-white" />
    </div>
  );
}

export default Navbar;
