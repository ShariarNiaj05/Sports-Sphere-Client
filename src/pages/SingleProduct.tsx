import Title from "@/components/custom/Title";
import Container from "@/components/shared/Container";
import { useSingleProductQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const { data } = useSingleProductQuery(id);
  console.log(data);
  return (
    <Container>
      <div className="mt-20">
        <Title>Details view</Title>
      </div>

      <div className=" mt-20 flex gap-6">
        {/* image div  */}
        <div>image</div>

        {/* product details div  */}
        <div>details</div>
      </div>
    </Container>
  );
};

export default SingleProduct;
