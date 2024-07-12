import Categories from "@/components/custom/Categories";
import Featured from "@/components/custom/Featured";
import HeroSection from "@/components/custom/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Featured />
      <Categories />
    </div>
  );
};

export default Home;
