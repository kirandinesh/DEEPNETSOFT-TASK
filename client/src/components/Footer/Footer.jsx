import FooterBox1 from "@/page/footer-content/FooterBox1";
import FooterBox2 from "@/page/footer-content/FooterBox2";
import FooterBox3 from "@/page/footer-content/FooterBox3";

function Footer() {
  return (
    <div
      className="w-full h-full flex flex-col  
       "
    >
      <div className="hidden lg:flex flex-col gap-3 lg:flex-row lg:w-full px-5  lg:px-24 mb-10">
        {/* //box1 */}
        <FooterBox1 />
        {/* //box2 */}
        <FooterBox2 />
        {/* //box3 */}
        <FooterBox3 />
      </div>
      <div className=" flex flex-col gap-5 lg:hidden px-5 mb-10">
        {/* //box2 */}
        <FooterBox2 />
        {/* //box1 */}
        <FooterBox1 />
        {/* //box3 */}
        <FooterBox3 />
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
