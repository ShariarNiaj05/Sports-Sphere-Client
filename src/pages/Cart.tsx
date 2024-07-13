import Title from "@/components/custom/Title";
import Container from "@/components/shared/Container";
import {
  addToCart,
  decrementFromCart,
  deleteFromCart,
  ICartProduct,
} from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { Star } from "lucide-react";
import Rating from "react-rating";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const products = [
  {
    brand: "Nike",
    createdAt: "2024-07-11T19:41:05.928Z",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy4QKUYGUhecolP3NzPK0HvwPhwti1QEm4WQ&s",
    price: 120,
    productDescription:
      "Lightweight and responsive, the Nike Air Zoom Pegasus 38 keeps you moving freely on your runs.",
    productName: "Air Zoom Pegasus 38",
    quantity: 1,
    rating: 1.5,
    sportsCategory: "Running",
    stockQuantity: 1,
    totalPrice: 120,
    updatedAt: "2024-07-11T19:41:05.928Z",
    __v: 0,
    _id: "66903551edc8b9ee6fa9e0b2",
  },
  {
    brand: "Spalding",
    createdAt: "2024-07-11T19:40:54.335Z",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6tItyqmhOfuwfTgRz7C7V8DOFMp7nXkUmvQ&s",
    price: 170,
    productDescription:
      "The Spalding NBA Official Game Ball is crafted from full grain leather for the ultimate feel and performance.",
    productName: "NBA Official Game Ball",
    quantity: 1,
    rating: 4.7,
    sportsCategory: "Basketball",
    stockQuantity: 1,
    totalPrice: 170,
    updatedAt: "2024-07-11T19:40:54.335Z",
    __v: 0,
    _id: "66903546edc8b9ee6fa9e0aa",
  },
];

const Cart = () => {
  const cart: ICartProduct[] = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();
  console.log(cart);

  // Calculate subtotal
  const subtotal = cart.reduce((total, item) => total + item.totalPrice, 0);

  // Calculate VAT (15%)
  const vat = subtotal * 0.15;

  // Calculate total price including VAT
  const totalPriceIncludingVAT = subtotal + vat;

  if (!cart || cart === undefined) {
    <div>Cart is empty</div>;
  }
  const handleIncrement = (item: ICartProduct) => {
    if (item.stockQuantity > item.quantity) {
      dispatch(addToCart(item));
    }
  };
  const handleDecrement = (item: ICartProduct) => {
    dispatch(decrementFromCart(item));
  };

  const handleDelete = (item: ICartProduct) => {
    dispatch(deleteFromCart(item._id));
  };
  return (
    <Container>
      <div className="my-28">
        <Title>My Cart</Title>

        {/* card section  */}
        <div className="mt-28 flex flex-col lg:flex-row gap-6">
          <div className="basis-3/4">
            {cart?.map((item) => (
              <div
                key={item._id}
                className=" mb-6 flex gap-6 items-center border-2 rounded-md p-2 relative"
              >
                <button
                  className="absolute text-2xl -top-0 right-0 text-red-600"
                  onClick={() => handleDelete(item)}
                >
                  <MdDeleteForever />
                </button>
                {/* image div  */}
                <div>
                  <img
                    src={item?.image}
                    alt={item?.productName}
                    className="size-52 object-cover rounded-md"
                  />
                </div>

                {/* info div  */}
                <div className="flex gap-16">
                  {/* name, price and rating div  */}
                  <div>
                    <h2 className="text-xl font-bold text-primary mb-2">
                      {item?.productName}
                    </h2>
                    <p className="font-bold mb-2">${item?.price}</p>
                    {/* @ts-expect-error their is no type declaration file for react rating*/}
                    <Rating
                      emptySymbol={<Star size={20} color="orange" />}
                      fullSymbol={
                        <Star size={20} color="orange" fill="orange" />
                      }
                      initialRating={item?.rating}
                      readonly
                    />
                  </div>
                  {/* action div  */}
                  <div className="flex justify-center gap-3">
                    <div className="flex gap-3 justify-center cursor-pointer">
                      <span onClick={() => handleDecrement(item)}>-</span>
                      <p className="font-bold">{item?.quantity}</p>
                      <span
                        onClick={() => handleIncrement(item)}
                        className="font-bold text-primary cursor-pointer"
                      >
                        +
                      </span>
                    </div>
                    <div>
                      {" "}
                      <p className="font-bold mb-2">${item?.totalPrice}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* order summary  */}

          {cart.length > 0 && (
            <div className="basis-1/4 border-2 p-2 rounded-md flex flex-col justify-between">
              <div>
                <p className="text-xl font-bold mb-3">
                  Subtotal: <span className="text-primary">${subtotal}</span>
                </p>
                <p className="text-base font-bold mb-6">
                  15% Vat: <span className="text-primary">${vat}</span>
                </p>

                <p className="text-primary  text-xl font-bold">
                  Total:{" "}
                  <span className="text-primary">
                    ${totalPriceIncludingVAT}
                  </span>
                </p>
              </div>

              <div className="flex justify-center items-center">
                <Link to={"/checkout"}>
                  <Button>Checkout</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Cart;
