import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets.ts";
import { FoodItemType } from "../../types";

export type StoreContextType = {
  food_list: FoodItemType[];
  cartItems: Record<string, number>;
  setCartItems: React.Dispatch<React.SetStateAction<Record<string, number>>>;
  addToCart: (itemId: string) => void;
  decreaseItemFromCart: (itemId: string) => void;
  getTotalCartAmount: () => number;
  deleteItemFromCart: (itemId: string) => void;
};

export const StoreContext = createContext<StoreContextType | null>(null);

const StoreContextProvider = (props: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<Record<string, number>>({});

  const addToCart = (itemId: string) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const decreaseItemFromCart = (itemId: string) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo!.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const deleteItemFromCart = (itemId: string) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    decreaseItemFromCart,
    getTotalCartAmount,
    deleteItemFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
