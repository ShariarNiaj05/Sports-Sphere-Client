import Title from "@/components/custom/Title";
import Container from "@/components/shared/Container";
import Loading from "@/components/shared/Loading";
import ProductCard from "@/components/shared/ProductCard";
import { useProductQuery } from "@/redux/api/baseApi";
import { IProduct } from "@/types/products";
import { useEffect, useState } from "react";

const AllProduct = () => {
  const { data, isFetching, isLoading } = useProductQuery({});
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    priceRange: [0, 1000],
    brand: "",
    rating: 0,
  });
  const [sortOption, setSortOption] = useState("priceAsc");
  const [filterdProducts, setFilteredProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    if (data) {
      let products = data.data;

      // Search functionality
      if (searchTerm) {
        products = products.filter((product: IProduct) =>
          product.productName.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      // Filter functionality
      if (filters.category) {
        products = products.filter(
          (product: IProduct) => product.sportsCategory === filters.category
        );
      }
      if (filters.brand) {
        products = products.filter(
          (product: IProduct) => product.brand === filters.brand
        );
      }
      if (filters.rating) {
        products = products.filter(
          (product: IProduct) => product.rating >= filters.rating
        );
      }
      products = products.filter(
        (product: IProduct) =>
          product.price >= filters.priceRange[0] &&
          product.price <= filters.priceRange[1]
      );

      // Sort functionality
      products.sort((a: IProduct, b: IProduct) => {
        if (sortOption === "priceAsc") {
          return a.price - b.price;
        } else if (sortOption === "priceDesc") {
          return b.price - a.price;
        }
        return 0;
      });

      setFilteredProducts(products);
    }
  }, [data, searchTerm, filters, sortOption]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setFilters({
      category: "",
      priceRange: [0, 1000],
      brand: "",
      rating: 0,
    });
    setSortOption("priceAsc");
  };

  if (isFetching || isLoading) {
    return <Loading />;
  }
  return (
    <Container>
      <div className="mt-20">
        <Title>All Product</Title>
        <div className=" mt-20 flex flex-col gap-10">
          {/* filter section  */}

          <div>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              value={filters.category}
              onChange={(e) =>
                setFilters({ ...filters, category: e.target.value })
              }
            >
              <option value="">All Categories</option>
              <option value="football">Football</option>
              <option value="basketball">Basketball</option>
              {/* Add more options as needed */}
            </select>
            <input
              type="range"
              min="0"
              max="1000"
              value={filters.priceRange[1]}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  priceRange: [0, Number(e.target.value)],
                })
              }
            />
            <select
              value={filters.brand}
              onChange={(e) =>
                setFilters({ ...filters, brand: e.target.value })
              }
            >
              <option value="">All Brands</option>
              <option value="nike">Nike</option>
              <option value="adidas">Adidas</option>
              {/* Add more options as needed */}
            </select>
            <select
              value={filters.rating}
              onChange={(e) =>
                setFilters({ ...filters, rating: Number(e.target.value) })
              }
            >
              <option value="0">All Ratings</option>
              <option value="1">1 Star & Up</option>
              <option value="2">2 Stars & Up</option>
              {/* Add more options as needed */}
            </select>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
              {/* Add more options as needed */}
            </select>
            <button onClick={handleClearFilters}>Clear Filters</button>
          </div>

          {/* All Product section  */}
          <div className=" grid grid-cols-3 gap-6">
            {filterdProducts?.map((product: IProduct) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AllProduct;
