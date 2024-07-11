import { useProductQuery } from "@/redux/api/baseApi";
import Container from "../shared/Container";
import Title from "./Title";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { IProduct } from "@/types/products";
import { FaBoxesStacked } from "react-icons/fa6";
import { PiSoccerBallFill } from "react-icons/pi";
import { MdOutlineSportsRugby } from "react-icons/md";
import { GiBaseballBat } from "react-icons/gi";

const Featured = () => {
  const { data, isError, isFetching, isLoading } = useProductQuery({});
  const products = data?.data;
  // <Loading />
  console.log(data);
  return (
    <Container>
      <div className="my-28">
        <Title>Featured</Title>

        {/* card section  */}
        <div className="mt-28 grid grid-cols-3 gap-6">
          {products?.map((product: IProduct) => (
            <Card className="text-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="p-2">
                <img
                  src={product?.image}
                  className="h-[400px] w-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
                  alt={product?.productName}
                />
              </CardHeader>
              <CardContent className="grid p-4">
                <div className="flex justify-between items-center gap-2">
                  {/* <Star color="orange" fill="orange" /> */}
                  <p className="text-xl font-semibold text-gray-400  flex gap-2 items-center">
                    {product?.sportsCategory}
                    <span>
                      {product?.sportsCategory === "Soccer" && (
                        <PiSoccerBallFill />
                      )}
                      {product?.sportsCategory === "Rugby" && (
                        <MdOutlineSportsRugby />
                      )}
                      {product?.sportsCategory === "Baseball" && (
                        <GiBaseballBat />
                      )}
                    </span>
                  </p>
                  <p className="text-xl font-semibold text-gray-400 flex justify-center items-center gap-2">
                    <span className="bg-white p-1 rounded-md">
                      <FaBoxesStacked className="text-black" />
                    </span>
                    {product?.stockQuantity}
                  </p>
                </div>

                <CardTitle className="mt-2 text-3xl font-extrabold">
                  {product?.productName}
                </CardTitle>

                <CardTitle className="mt-2 text-base font-extrabold">
                  {product?.brand}
                </CardTitle>
                <p className="text-lg mt-4 text-gray-400">
                  {product?.productDescription}
                </p>
              </CardContent>

              <CardFooter>{/* <RatingModal movie={products} /> */}</CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Featured;
