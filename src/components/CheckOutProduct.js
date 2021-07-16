import Image from "next/image";

import { StarIcon } from "@heroicons/react/solid";

import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

const CheckOutProduct = ({
  id,
  title,
  rating,
  category,
  price,
  hasPrice,
  description,
  image,
}) => {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      rating,
      category,
      price,
      hasPrice,
      description,
      image,
    };
    // Push item into redux
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image src={image} width={200} height={200} objectFit="contain" />
      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency={"GBP"} />
        {hasPrice && (
          <div className="flex items-center space-x-2 mt-5">
            <Image
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
              width={48}
              height={48}
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      {/* Right add/remove buttons */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button
          onClick={addItemToBasket}
          className="mt-auto button"
          type="button"
        >
          ADD to Basket
        </button>
        <button
          onClick={removeItemFromBasket}
          className="mt-auto button"
          type="button"
        >
          Remove form Basket
        </button>
      </div>
    </div>
  );
};

export default CheckOutProduct;
