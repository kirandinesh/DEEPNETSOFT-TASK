import { Card } from "@/components/ui/card";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Logo from "/src/assets/TopBarLogo.png";

function FooterBox2() {
  return (
    <Card
      className=" bg-transparent flex flex-col 
        text-center items-center justify-center relative h-[128px]
        lg:w-full
        "
    >
      <img
        src={Logo}
        alt=""
        className="absolute -top-8 h-[66px] w-[74px] left-1/2 -translate-x-1/2"
      />
      <h1 className="text-white font-title font-normal text-[30px] pt-4">
        <span className="text-[#0796EF]">DEEP</span> NET{" "}
        <span className="text-[#857878]">SOFT</span>
      </h1>
      <div
        className=" text-[#808080] flex w-[83px] h-[13.05px]
          justify-between items-center
          "
      >
        <Facebook size={12} />
        <Twitter size={12} />
        <Youtube size={12} />
        <Instagram size={12} />
      </div>
    </Card>
  );
}

export default FooterBox2;
