import Container from "../shared/Container";
import Title from "./Title";

import { IoMdBaseball } from "react-icons/io";
import { PiSoccerBallFill } from "react-icons/pi";
import { MdOutlineSportsRugby } from "react-icons/md";

const Categories = () => {
  return (
    <Container>
      <div className="my-28">
        <Title>Categories</Title>

        {/* card section  */}
        <div className="mt-16 grid grid-cols-3 gap-6 mx-auto text-center justify-items-center items-center">
          <IoMdBaseball className=" text-8xl text-primary" />
          <PiSoccerBallFill className=" text-8xl text-primary" />
          <MdOutlineSportsRugby className=" text-8xl text-primary" />
        </div>
      </div>
    </Container>
  );
};

export default Categories;
