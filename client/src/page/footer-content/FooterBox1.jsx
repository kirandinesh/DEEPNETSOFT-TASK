import { Card } from "@/components/ui/card";
import telephone from "/src/assets/telePhone.png";
import emailIcon from "/src/assets/Email.png";
function FooterBox1() {
  return (
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
          <img src={telephone} alt="" className="w-[17.42px] h-[17.42px] " />
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
  );
}

export default FooterBox1;
