import Navbar from "@/components/Navbar/Navbar";
import ShopMenu from "../ShopMenu/ShopMenu";
import Footer from "@/components/Footer/Footer";

function ShopLayout() {
  return (
    <div
      className="w-screen h-screen overflow-x-hidden 
    overflow-y-auto
    "
    >
      <div>
        <Navbar />
        <main>
          <ShopMenu />
        </main>
        <footer>
          <Footer />
          <div
            className="text-[#857878] text-[12px] bg-[#161616] flex flex-col items-center justify-center h-[55px]
          font-footerText
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
        </footer>
      </div>
    </div>
  );
}

export default ShopLayout;
