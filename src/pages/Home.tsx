import Categories from "@/components/custom/Categories";
import Contact from "@/components/custom/Contact";
import Featured from "@/components/custom/Featured";
import HeroSection from "@/components/custom/HeroSection";
import ProductCarousel from "@/components/custom/ProductCarousel";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Featured />
      <ProductCarousel />
      <Categories />
      <Contact />
    </div>
  );
};

export default Home;
