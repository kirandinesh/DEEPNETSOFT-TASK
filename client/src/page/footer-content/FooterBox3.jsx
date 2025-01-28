import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

function FooterBox3() {
  return (
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
  );
}

export default FooterBox3;
