import { useProductQuery } from "@/redux/api/baseApi";
import Container from "../shared/Container";
import Title from "./Title";

const Featured = () => {
  const { data, isError, isFetching, isLoading } = useProductQuery({});

  console.log(data);
  return (
    <Container>
      <div className="my-28">
        <Title>Featured</Title>

        {/* card section  */}
      </div>
    </Container>
  );
};

export default Featured;
