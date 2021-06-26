import Image from "next/image";
import { useState } from "react";

import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ id, title, category, price, description, image }) => {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image
        src={image}
        width="200"
        height="200"
        objectFit="contain"
        alt={title}
      />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <div key={i}>
              <StarIcon className="h-5 text-yellow-500" />
            </div>
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="GBP" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 mt-5">
          <Image
            className="w-12"
            src="https://links.papareact.com/fdw"
            alt=""
            width={48}
            height={48}
          />
          <p className="text-xs text-gray-500">FRRE Next-day Delivery</p>
        </div>
      )}
      <button className="mt-auto button" type="button">
        ADD to Basket
      </button>
    </div>
  );
};

export default Product;
