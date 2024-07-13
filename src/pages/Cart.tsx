import Title from "@/components/custom/Title";
import Container from "@/components/shared/Container";
import { ICartProduct } from "@/redux/features/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { Star } from "lucide-react";
import Rating from "react-rating";

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
  console.log(cart);
  if (!cart || cart === undefined) {
    <div>Cart is empty</div>;
  }

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
                className=" mb-6 flex gap-6 items-center border-2 rounded-md p-2"
              >
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
                    <div className="flex gap-3 justify-center">
                      <span>-</span>
                      <p className="font-bold">{item?.quantity}</p>
                      <span className="font-bold text-primary">+</span>
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
          <div className="basis-1/4">order summary</div>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
