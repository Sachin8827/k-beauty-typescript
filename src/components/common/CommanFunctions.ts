import { Cart, User } from "../../Types/Types";

export const calculatePrice = (cart:Cart[]) => {
  const prices = cart.map((item) => item.quantity * item.product.price);
  return prices?.reduce((sum, price) => sum + price, 0);
};

export const findByEmail = (data:User[], email:string) => {
  return data.find((item) => item.email.toLowerCase() == email.toLowerCase());
};
