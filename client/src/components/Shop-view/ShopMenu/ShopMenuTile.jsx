function ShopMenuTile({ name, description, price }) {
  return (
    <div className="w-full h-[66px] flex flex-col">
      <div className="flex justify-between">
        <div className="font-title text-base font-normal overflow-ellipsis w-full">
          {name}
        </div>
        <div>${price}</div>
      </div>
      <div className="font-par text-[14px] text-[#857878]">{description}</div>
    </div>
  );
}

export default ShopMenuTile;
