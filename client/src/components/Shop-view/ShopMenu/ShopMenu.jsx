import menuBanner from "/src/assets/menuBanner.png";
import MenuContent from "@/page/shop-main-content";

function ShopMenu() {
  return (
    <div className="w-full h-full lg:pt-10 ">
      <div className="w-full h-[296px] relative">
        <img
          className="w-full h-full object-cover"
          src={menuBanner}
          alt="Menu Banner"
          loading="lazy"
        />
        <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center pt-8">
          <h1
            className="text-white font-title text-[40px]
           font-semibold drop-shadow-custom  lg:text-[75px]
           lg:drop-shadow-lgScreen
           "
          >
            MENU
          </h1>
          <div className="font-par lg:w-1/2 px-2 text-center text-base lg:text-xl text-[#bbbbbb]">
            Please take a look at our menu featuring food, drinks, and brunch.
            If you'd like to place an order, use the "Order Online" button
            located below the menu.
          </div>
        </div>
      </div>
      <div className="w-full ">
        <MenuContent />
      </div>
    </div>
  );
}

export default ShopMenu;
