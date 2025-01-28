function ShopMenuTile({ name, description, price }) {
  return (
    <div className="w-full h-auto flex flex-col  p-4 transition-shadow duration-300 ">
      <div className="flex items-end">
        <span className="font-title text-lg md:text-xl lg:text-2xl text-white ">
          {name}
        </span>

        <div className="flex-grow border-b-2 border-dotted border-gray-400 dark:border-gray-600 mb-1 md:mb-0"></div>

        <span className="pl-2 font-title text-lg md:text-xl lg:text-2xl ">
          ${price}
        </span>
      </div>
      <div className="font-par text-sm md:text-base lg:text-lg  mt-2 opacity-75">
        {description}
      </div>
    </div>
  );
}

export default ShopMenuTile;
