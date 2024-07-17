import Title from "@/components/custom/Title";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ICartProduct } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

const Checkout = () => {
  const cart: ICartProduct[] = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();
  console.log(cart);
  return (
    <Container>
      <div className="my-28">
        <Title>Check Out</Title>

        <div className=" mt-12 flex flex-col md:flex-row gap-8">
          <div className="basis-3/4 space-y-8">
            {/* Full Name  */}
            <Input
              type="text"
              placeholder="Full Name."
              className="lg:w-[70%]"
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Email."
              className="lg:w-[70%]"
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Phone Number."
              className="lg:w-[70%]"
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Address"
              className="lg:w-[70%]"
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="basis-1/4 flex flex-col gap-3">
            <Button>Cash On Delivery</Button>
            <Button className="bg-secondary">Stripe </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
