export type FoodItemType = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

export type StoreContextType = {
  foodList: FoodItemType[];
  cartItems: Record<string, number>;
  setCartItems: React.Dispatch<React.SetStateAction<Record<string, number>>>;
  addToCart: (itemId: string) => void;
  decreaseItemFromCart: (itemId: string) => void;
  getTotalCartAmount: () => number;
  deleteItemFromCart: (itemId: string) => void;
  url: string;
  token?: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
};
