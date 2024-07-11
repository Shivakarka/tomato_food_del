export type FoodItemType = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  quantity?: number;
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

interface Address {
  firstName: string;
  lastName: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
  phone: string;
}

interface Item extends FoodItemType {
  __v: number;
}

export interface Order {
  _id: string;
  userId: string;
  items: Item[];
  amount: number;
  address: Address;
  status: string;
  date: string;
  payment: boolean;
  __v: number;
}
