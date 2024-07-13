import { ICartProduct } from "@/redux/features/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

const Cart = () => {
  const cart: ICartProduct[] = useAppSelector((state: RootState) => state.cart);
  console.log(cart);
  return <div>Cart</div>;
};

export default Cart;
