import Title from "@/components/custom/Title";
import Container from "@/components/shared/Container";

const AllProduct = () => {
  return (
    <Container>
      <div className="mt-20">
        <Title>All Product</Title>
        <div className=" mt-20 flex flex-col gap-10">
          {/* filter section  */}

          <div>filter</div>

          {/* All Product section  */}
          <div>all AllProduct</div>
        </div>
      </div>
    </Container>
  );
};

export default AllProduct;
