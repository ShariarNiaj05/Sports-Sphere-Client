import { useAllProducts } from "@/utils/products";
import Container from "../shared/Container";
import Title from "./Title";
import { IProduct } from "@/types/products";
import Loading from "../shared/Loading";

const SimilarProducts = ({ sportsCategory }: { sportsCategory: string }) => {
  const { data, isFetching, isLoading } = useAllProducts();
  const allProducts = data?.data;

  if (isLoading || isFetching) {
    return <Loading />;
  }
  const matchedCategoryProducts = allProducts?.filter(
    (products: IProduct) => products?.sportsCategory === sportsCategory
  );

  console.log(matchedCategoryProducts);
  return (
    <Container>
      <div className="mt-20">
        <Title>More from this category</Title>
      </div>

      <div>6 similar product here</div>
    </Container>
  );
};

export default SimilarProducts;
