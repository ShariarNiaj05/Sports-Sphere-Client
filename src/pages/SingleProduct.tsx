import Container from "@/components/shared/Container";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  return (
    <Container>
      <div>{id}</div>
    </Container>
  );
};

export default SingleProduct;
