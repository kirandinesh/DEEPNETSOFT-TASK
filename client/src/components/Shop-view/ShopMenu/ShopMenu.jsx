import { useState, useEffect, lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import menuBanner from "/src/assets/menuBanner.png";
import menuBanner2 from "/src/assets/menuBanner2.png";
import menuBanner3 from "/src/assets/menuBanner3.png";
import glassOne from "/src/assets/glassOne.png";
import glassTwo from "/src/assets/glassTwo.png";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { addMenu, addMenuItem, fetchMenus } from "@/features/menu/menu-slice";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const ShopMenuTile = lazy(() => import("./ShopMenuTile"));

function ShopMenu() {
  const [menuForm, setMenuForm] = useState({ name: "", description: "" });
  const [itemForm, setItemForm] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [showMenuForm, setShowMenuForm] = useState(false);
  const [showMenuListForm, setShowMenuListForm] = useState(false);
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);

  const dispatch = useDispatch();
  const { menuList: menus } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(fetchMenus());
  }, [dispatch]);

  useEffect(() => {
    const savedActiveMenuIndex = sessionStorage.getItem("activeMenuIndex");
    if (savedActiveMenuIndex) {
      setActiveMenuIndex(parseInt(savedActiveMenuIndex, 10));
    }
  }, []);

  useEffect(() => {
    if (activeMenuIndex !== null) {
      sessionStorage.setItem("activeMenuIndex", activeMenuIndex);
    }
  }, [activeMenuIndex]);

  const handleAddMenu = () => {
    if (menuForm.name.trim()) {
      dispatch(
        addMenu({ name: menuForm.name, description: menuForm.description })
      );
      setMenuForm({ name: "", description: "" });
      setShowMenuForm(false);
    }
  };

  const handleAddItem = () => {
    if (activeMenuIndex !== null && itemForm.name.trim()) {
      const menuId = menus[activeMenuIndex]._id;
      dispatch(addMenuItem({ menuId, item: itemForm }));
      setItemForm({ name: "", description: "", price: "" });
    }
  };

  return (
    <div className="w-full h-full pt-10">
      <div className="w-full h-[296px] relative">
        <img
          className="w-full h-full object-cover"
          src={menuBanner}
          alt="Menu Banner"
          loading="lazy"
        />
        <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
          <h1
            className="text-white font-title text-[40px]
           font-semibold drop-shadow-custom  lg:text-[75px]
           lg:drop-shadow-lgScreen
           "
          >
            MENU
          </h1>
          <p
            className="text-white font-par text-center leading-[19.39px]
          lg:text-[18px]
          "
          >
            Please take a look at our menu featuring food, drinks, and brunch.
            If you'd like to place an order, use the "Order Online" button
            located below the menu.
          </p>
        </div>
      </div>

      <div className="relative">
        <div
          className="w-full h-[80px] flex items-center justify-center overflow-y-hidden
        overflow-x-auto gap-2"
          style={{ backgroundImage: `url(${menuBanner2})` }}
        >
          {menus.map((menu, index) => (
            <div
              key={index}
              className={`w-[73px] h-[32px] bg-black border-[1px] border-[#0796EF] 
          font-title text-[12px] text-white flex items-center justify-center cursor-pointer
          flex-shrink-0 lg:h-[49px] lg:w-[114px] lg:text-[16px] lg:tracking-widest`}
              style={{
                backgroundColor:
                  activeMenuIndex === index ? "#0796EF" : "black",
              }}
              onClick={() => setActiveMenuIndex(index)}
            >
              {menu.name}
            </div>
          ))}
          <div className="flex gap-2 items-center justify-center">
            <div
              onClick={() => setShowMenuForm(!showMenuForm)}
              className="cursor-pointer absolute top-0 "
            >
              <Popover>
                <PopoverTrigger>
                  <Plus color="white" />
                </PopoverTrigger>
                <PopoverContent className="bg-black absolute top-0 -right-0">
                  <div className="flex flex-col gap-2 items-center">
                    <input
                      type="text"
                      placeholder="Menu Name"
                      value={menuForm.name}
                      onChange={(e) =>
                        setMenuForm({ ...menuForm, name: e.target.value })
                      }
                      className="w-1/2 p-1"
                    />
                    <input
                      type="text"
                      placeholder="Description"
                      value={menuForm.description}
                      onChange={(e) =>
                        setMenuForm({
                          ...menuForm,
                          description: e.target.value,
                        })
                      }
                      className="w-1/2 p-1"
                    />
                    <Button onClick={handleAddMenu}>Add Tab</Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full bg-cover bg-center px-5 py-10 lg:px-24"
        style={{ backgroundImage: `url(${menuBanner3})` }}
      >
        {activeMenuIndex !== null && menus[activeMenuIndex] && (
          <Card
            key={menus[activeMenuIndex]._id}
            className="w-full bg-transparent rounded-none relative text-white mb-4 lg:px-16"
          >
            <div
              className="absolute top-2 right-2"
              onClick={() => setShowMenuListForm(!showMenuListForm)}
            >
              <Popover>
                <PopoverTrigger>
                  <Plus />
                </PopoverTrigger>
                <PopoverContent className="bg-black absolute top-0 -right-0 overflow-hidden">
                  <div className="flex flex-col justify-between gap-2 pt-5 text-black">
                    <div className="flex justify-between gap-2">
                      <input
                        className="w-full"
                        type="text"
                        placeholder="Item Name"
                        value={itemForm.name}
                        onChange={(e) =>
                          setItemForm({ ...itemForm, name: e.target.value })
                        }
                      />
                      <input
                        className="w-full"
                        type="number"
                        placeholder="Price"
                        value={itemForm.price}
                        onChange={(e) =>
                          setItemForm({ ...itemForm, price: e.target.value })
                        }
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Description"
                      value={itemForm.description}
                      onChange={(e) =>
                        setItemForm({
                          ...itemForm,
                          description: e.target.value,
                        })
                      }
                      className="w-full p-1"
                    />
                    <Button onClick={handleAddItem}>Add Item</Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            <CardHeader className="w-full text-white text-center flex justify-center items-center">
              <div
                className="flex justify-center items-center w-full cursor-pointer"
                onClick={() => setActiveMenuIndex(activeMenuIndex)}
              >
                <div className="absolute -top-3 left-0 z-10 lg:-top-28 lg:-left-10">
                  <img src={glassOne} alt="" className="lg:w-[150px]" />
                </div>
                <div className="bg-white w-[50px] h-[1.5px]"></div>
                <h1
                  className="text-white font-title text-[30px] 
                lg:text-[50px]
                font-semibold drop-shadow-custom 
                leading-[35px] tracking-[3%] lg:drop-shadow-lgScreen"
                >
                  {menus[activeMenuIndex].description
                    ? menus[activeMenuIndex].description.toUpperCase()
                    : "Unnamed Menu"}
                </h1>
                <div className="bg-white w-[50px] h-[1.5px]"></div>
              </div>
            </CardHeader>

            <CardContent
              className="px-3 py-4 lg:grid lg:grid-cols-2
              lg:gap-x-14  lg:gap-y-5"
            >
              {menus[activeMenuIndex].items &&
              menus[activeMenuIndex].items.length > 0
                ? menus[activeMenuIndex].items.map((item, itemIndex) => (
                    <Suspense key={itemIndex} fallback={<div>Loading...</div>}>
                      <ShopMenuTile
                        name={item.name}
                        price={item.price}
                        description={item.description}
                      />
                    </Suspense>
                  ))
                : ""}
            </CardContent>
            <CardFooter className="flex p-0 justify-end items-start h-20 w-full">
              <div className="lg:absolute lg:-bottom-10 lg:-right-5">
                <img
                  className="w-full h-full lg:w-[150px]"
                  src={glassTwo}
                  alt=""
                  loading="lazy"
                />
              </div>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
}

export default ShopMenu;
