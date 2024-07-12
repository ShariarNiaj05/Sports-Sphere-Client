import Title from "@/components/custom/Title";
import Container from "@/components/shared/Container";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSingleProductQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router-dom";
import { PiSoccerBallFill } from "react-icons/pi";
import { MdOutlineSportsRugby } from "react-icons/md";
import { GiBaseballBat } from "react-icons/gi";
import { FaBoxesStacked } from "react-icons/fa6";
import { Star } from "lucide-react";
import Rating from "react-rating";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cartSlice";
import { RootState } from "@/redux/store";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { data } = useSingleProductQuery(id);
  const product = data?.data;
  const cart = useAppSelector((state: RootState) => state.cart);

  console.log(cart);
  const handleCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };
  return (
    <Container>
      <div className="mt-20">
        <Title>Details view</Title>
      </div>

      <div className=" mt-20 flex flex-col: md:flex-row gap-6">
        {/* image div  */}
        <div>
          <CardHeader className="p-2">
            <img
              src={product?.image}
              className="h-[400px] w-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
              alt={product?.productName}
            />
          </CardHeader>
        </div>

        {/* product details div  */}
        <div>
          <CardContent className="grid p-4">
            <div className="flex justify-between items-center gap-2">
              {/* <Star color="orange" fill="orange" /> */}
              <p className="text-2xl font-semibold text-gray-400  flex gap-2 items-center">
                {product?.sportsCategory}
                <span>
                  {product?.sportsCategory === "Soccer" && <PiSoccerBallFill />}
                  {product?.sportsCategory === "Rugby" && (
                    <MdOutlineSportsRugby />
                  )}
                  {product?.sportsCategory === "Baseball" && <GiBaseballBat />}
                </span>
              </p>
              <p className="text-xl font-semibold text-gray-400 flex justify-center items-center gap-2">
                <span className="bg-white p-1 rounded-md">
                  <FaBoxesStacked className="text-black" />
                </span>
                {product?.stockQuantity}
              </p>
            </div>

            <CardTitle className="my-6 text-5xl font-extrabold">
              {product?.productName}
            </CardTitle>

            <CardTitle className="mt-2 text-base font-extrabold flex gap-5 text-gray-400">
              {product?.brand}
              <span className="text-black text-xl">${product?.price}</span>
            </CardTitle>
            <p className="text-lg mt-6 text-black">
              {product?.productDescription}
            </p>
          </CardContent>

          <CardFooter className="mt-6 flex flex-col item-start gap-6">
            {/* @ts-expect-error their is no type declaration file for react rating*/}
            <Rating
              emptySymbol={<Star size={20} color="orange" />}
              fullSymbol={<Star size={20} color="orange" fill="orange" />}
              initialRating={product?.rating}
              readonly
            />
            <Button onClick={handleCart}>Add To Cart</Button>
          </CardFooter>
        </div>
      </div>
    </Container>
  );
};

export default SingleProduct;
