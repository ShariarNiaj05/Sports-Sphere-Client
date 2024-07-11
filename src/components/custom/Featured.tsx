import { useProductQuery } from "@/redux/api/baseApi";
import Container from "../shared/Container";
import Title from "./Title";
import Loading from "../shared/Loading";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Link } from "react-router-dom";
import { IProduct } from "@/types/products";

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
                <div className="flex items-center gap-2">
                  {/* <Star color="orange" fill="orange" /> */}
                  <p className="text-xl font-semibold text-gray-400">
                    {product?.sportsCategory}
                  </p>
                  <p className="text-xl font-semibold text-gray-400">
                    {product?.stockQuantity}
                  </p>
                </div>
                <CardTitle className="mt-2 text-3xl font-extrabold">
                  {product?.productName}
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
