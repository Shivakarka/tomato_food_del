export type FoodItemType = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
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
  quantity: number;
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
