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
import Rating from "react-rating";
import { Star } from "lucide-react";
import ProductCard from "../shared/ProductCard";

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
          {products?.slice(0, 6)?.map((product: IProduct) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Featured;
