function ShopMenuTile({ name, description, price }) {
  return (
    <div className="w-full h-[66px] flex flex-col">
      <div className="flex items-end ">
        <span
          className="font-title text-base lg:text-[26px]  pr-1
        
        "
        >
          {name}
        </span>

        <div
          className="flex-grow border-b-2 mb-1 border-dotted
        border-white lg:mb-0 lg:border-b-4"
        ></div>

        <span className="pl-2  font-title text-base lg:text-[26px]">
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
