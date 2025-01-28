import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDispatch, useSelector } from "react-redux";
import MenuItemList from "../items-content";
import glassOne from "/src/assets/glassOne.png";
import glassTwo from "/src/assets/glassTwo.png";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { addMenu, addMenuItem, fetchMenus } from "@/features/menu/menu-slice";

function MenuContent() {
  const initialItemForm = { name: "", description: "", price: "" };
  const initialMenuForm = { name: "", description: "" };
  const { menuList } = useSelector((state) => state.menu);
  const [menuForm, setMenuForm] = useState(initialMenuForm);
  const [itemForm, setItemForm] = useState(initialItemForm);
  const dispatch = useDispatch();
  const handleAddMenu = () => {
    if (menuForm.name.trim()) {
      dispatch(
        addMenu({ name: menuForm.name, description: menuForm.description })
      );
      setMenuForm(initialMenuForm);
    }
  };

  const handleAddItem = (menuId) => {
    dispatch(addMenuItem({ menuId, item: itemForm }));
    setItemForm(initialItemForm);
  };
  useEffect(() => {
    dispatch(fetchMenus());
  }, []);

  console.log(menuList, "menu");
  return (
    <div className="w-full text-white ">
      <Tabs defaultValue="DRINKS">
        <div className="flex flex-col justify-center items-center">
          <div className="w-full flex xl:justify-center overflow-x-auto my-4">
            <TabsList className="flex gap-2  whitespace-nowrap px-4">
              {menuList.map((menuitems, index) => (
                <TabsTrigger
                  key={index}
                  value={`${menuitems?.name}`}
                  className="shrink-0"
                >
                  <span className="font-semibold drop-shadow-custom">
                    {menuitems?.name?.toUpperCase()}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="mb-2">
            <Popover>
              <PopoverTrigger>
                <Button>ADD NEW TAB</Button>
              </PopoverTrigger>
              <PopoverContent className="bg-black">
                <div className="flex flex-col gap-3">
                  <Input
                    type="text"
                    placeholder="Menu Name"
                    value={menuForm.name}
                    onChange={(e) =>
                      setMenuForm({ ...menuForm, name: e.target.value })
                    }
                  />
                  <Input
                    type="text"
                    placeholder="Description"
                    value={menuForm.description}
                    onChange={(e) =>
                      setMenuForm({
                        ...menuForm,
                        description: e.target.value,
                      })
                    }
                  />
                  <Button onClick={handleAddMenu}>Add Tab</Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        {menuList.map((menuitems, index) => (
          <TabsContent
            key={index}
            value={menuitems?.name}
            className="mx-5 lg:px-24 "
          >
            <div className="border-[#FFFFFF] border-[1px] flex flex-col w-full lg:gap-10 gap-4  p-5 relative">
              <div className="absolute -top-5 -left-2 z-10 lg:-top-28 lg:-left-10">
                <img
                  src={glassOne}
                  alt="glassImage"
                  className="lg:w-[150px] "
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-5 -right-5">
                <img
                  className="lg:w-[150px]"
                  src={glassTwo}
                  alt="glassImage"
                  loading="lazy"
                />
              </div>
              <div className="flex gap-1 justify-center items-center">
                <div className="bg-[#857878] w-16 h-[2px]"></div>
                <h1
                  className="text-white font-title text-[30px] 
                lg:text-[50px]
                font-semibold drop-shadow-custom text-center
                leading-[35px] tracking-[3%] lg:drop-shadow-lgScreen"
                >
                  {menuitems?.description?.toUpperCase()}
                </h1>
                <div className="bg-[#857878] w-16 h-[2px]"></div>
              </div>
              <div className="flex justify-center items-center">
                <Popover>
                  <PopoverTrigger>
                    <Button>ADD MENU ITEMS</Button>
                  </PopoverTrigger>
                  <PopoverContent className="bg-black">
                    <div className="flex flex-col gap-3">
                      <Input
                        type="text"
                        placeholder="Item Name"
                        value={itemForm.name}
                        onChange={(e) =>
                          setItemForm({ ...itemForm, name: e.target.value })
                        }
                      />

                      <Input
                        type="text"
                        placeholder="Description"
                        value={itemForm.description}
                        onChange={(e) =>
                          setItemForm({
                            ...itemForm,
                            description: e.target.value,
                          })
                        }
                      />
                      <Input
                        type="number"
                        placeholder="Price"
                        value={itemForm.price}
                        onChange={(e) =>
                          setItemForm({ ...itemForm, price: e.target.value })
                        }
                      />
                      <Button onClick={() => handleAddItem(menuitems?._id)}>
                        ADD MENU ITEMS
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              <MenuItemList items={menuitems?.items} menuList={menuitems} />
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default MenuContent;
