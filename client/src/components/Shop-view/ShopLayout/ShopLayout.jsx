import Navbar from "@/components/Navbar/Navbar";

import Footer from "@/components/Footer/Footer";
import ShopMenu from "@/components/Shop-view/ShopMenu/ShopMenu";

function ShopLayout() {
  return (
    <div
      className="w-screen h-screen overflow-x-hidden 
    overflow-y-auto
    "
    >
      <div className="w-full h-full flex justify-between flex-col">
        <header>
          <Navbar />
        </header>
        <main className="flex-grow">
          <ShopMenu />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default ShopLayout;
