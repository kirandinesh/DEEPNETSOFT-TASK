import ShopMenuTile from "@/components/Shop-view/ShopMenu/ShopMenuTile";

function MenuItemList({ items, index, menuList }) {
  console.log(menuList?.description);
  console.log(items);
  return (
    <div
      className="py-3  lg:px-10 lg:py-4 lg:grid lg:grid-cols-2
    lg:gap-x-14  lg:gap-y-8 "
    >
      {items.map((item, index) => (
        <ShopMenuTile
          key={index}
          name={item.name}
          price={item.price}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default MenuItemList;
