import React, {createContext} from "react";
import { food_list } from "../assets/assets.ts";
import {FoodItemType} from "../../types";

type StoreContextType = {
    food_list: FoodItemType[]
}

export const StoreContext = createContext<StoreContextType | null>(null);

const StoreContextProvider = (props:{children: React.ReactNode}) => {

    const contextValue = {
        food_list
    }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
}

export default StoreContextProvider;