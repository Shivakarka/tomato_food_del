import { useContext } from "react";
import { assets } from "../../assets/assets.ts";

import "./foodItem.css";
import { StoreContext } from "../../context/StoreContext.tsx";
import { StoreContextType } from "../../../types.ts";

type FoodItemProps = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

const FoodItem = ({ id, name, price, description, image }: FoodItemProps) => {
  const { cartItems, addToCart, decreaseItemFromCart, url } = useContext(
    StoreContext
  ) as StoreContextType;

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          className="food-item-image"
          src={url + "/images/" + image}
          alt=""
        />
      </div>
      <div className="food-item-info">
        <div className="food-item-name">
          <p>{name}</p>
        </div>
        <p className="food-item-desc">{description}</p>
        <div className="food-item-price-counter">
          <p className="food-item-price">${price}</p>
          {!cartItems[id] ? (
            <img
              src={assets.add_icon_white}
              alt="add item icon"
              className="add"
              onClick={() => addToCart(id)}
            />
          ) : (
            <div className="food-item-counter">
              <img
                src={assets.remove_icon_red}
                alt="item remove icon"
                onClick={() => decreaseItemFromCart(id)}
              />
              <p>{cartItems[id]}</p>
              <img
                src={assets.add_icon_green}
                alt="item add icon"
                onClick={() => addToCart(id)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
