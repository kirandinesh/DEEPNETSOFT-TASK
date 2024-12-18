import { Facebook, Instagram, MapPin, Twitter, Youtube } from "lucide-react";
import { Card } from "../ui/card";
import Logo from "/src/assets/Logo.png";
import telephone from "/src/assets/telePhone.png";
import emailIcon from "/src/assets/Email.png";
function Footer() {
  return (
    <div
      className="w-full h-full flex flex-col  
       "
    >
      <div
        className="flex flex-col gap-3 lg:flex-row lg:w-full px-5  lg:px-24 mb-10
      
      "
      >
        <Card
          className=" bg-transparent flex flex-col 
        text-center items-center justify-center relative h-[128px]
        lg:w-full
        "
        >
          <img src={Logo} alt="" className="absolute -top-8" />
          <h1 className="text-white font-title font-normal text-[30px]">
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
        <Card
          className="bg-transparent flex flex-col text-center items-center relative h-[128px] text-white
        justify-center lg:w-full
        "
        >
          <div className="mb-4 ">
            <h3
              className="font-title text-[14px] text-[#0796EF]
              font-medium tracking-wide
            "
            >
              CONNECT WITH US
            </h3>
          </div>
          <div>
            <div className="flex items-center justify-center gap-4">
              <img
                src={telephone}
                alt=""
                className="w-[17.42px] h-[17.42px] "
              />
              <h3 className="text-[14px] font-title text-[#857878]">
                +91 9567843340
              </h3>
            </div>
            <div className="flex items-center justify-center gap-4">
              <img src={emailIcon} alt="" className="w-[17.42px] h-[17.42px]" />
              <h3 className="text-[14px] font-title text-[#857878]">
                info@deepnetsoft.com
              </h3>
            </div>
          </div>
        </Card>
        <Card
          className="bg-transparent flex flex-col text-center items-center 
        justify-center relative h-[128px] text-white
        lg:w-full
        "
        >
          <div className="mb-4 ">
            <h3
              className="font-title text-[14px] text-[#0796EF]
              font-medium tracking-wide
            "
            >
              FIND US
            </h3>
          </div>
          <div>
            <div className="flex items-start  justify-center gap-4">
              <MapPin color="#C5A059" size={13} className="mt-1" />
              <h3 className="text-[16px] font-title text-[#857878]">
                First floor, Geo infopark,
                <br />
                Infopark EXPY, Kakkanad
              </h3>
            </div>
          </div>
        </Card>
      </div>
      <div
        className="bg-[#161616] flex flex-col justify-center items-center p-3 mt-2
      lg:flex-row lg:justify-between lg:px-24
      "
      >
        <div>
          <h3 className="text-[#857878] text-[12px]">
            © 2024 42 Bar & Grill. Developed by Deepnetsoft Solutions.
          </h3>
        </div>
        <div className="flex gap-3">
          <h3 className="text-[#857878] text-[12px]">Terms & Conditions</h3>
          <h3 className="text-[#857878] text-[12px]">Privacy Policy</h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
