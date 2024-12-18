function ShopMenuTile({ name, description, price }) {
  return (
    <div className="w-full h-[66px] flex flex-col">
      <div className="flex items-center">
        <span
          className="font-title text-base lg:text-[26px]  pr-2
        pb-4
        "
        >
          {name}
        </span>

        <div className="flex-grow border-b border-dotted border-gray-400"></div>

        <span className="pl-2 pb-4 font-title text-base lg:text-[26px]">
          ${price}
        </span>
      </div>
      <div
        className="font-par text-[14px] text-[#857878] mt-1
      lg:text-[18px]
      "
      >
        {description}
      </div>
    </div>
  );
}

export default ShopMenuTile;
