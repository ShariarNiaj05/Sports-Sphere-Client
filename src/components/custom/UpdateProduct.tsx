import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { toast } from "sonner";
import Container from "../shared/Container";
import Title from "./Title";
import { useParams } from "react-router-dom";
import { useSingleProductQuery } from "@/redux/api/baseApi";
import Loading from "../shared/Loading";

const UpdateProduct = () => {
  const { id } = useParams();

  const [productName, setProductName] = useState<string>("");
  const [sportsCategory, setSportsCategory] = useState<string>("");
  const [stockQuantity, setStockQuantity] = useState<number>(0);
  const [brand, setBrand] = useState<string>("");
  const [rating, setRating] = useState<number>(5);
  const [productDescription, setProductDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(100);
  const [image, setImage] = useState<string>("");

  const {
    data: singleProductData,
    isFetching,
    isLoading,
  } = useSingleProductQuery(id);

  if (isFetching || isLoading) {
    return <Loading />;
  }
  const {
    productName: defaultProductName,
    sportsCategory: defaultSportsCategory,
    stockQuantity: defaultStockQuantity,
    brand: defaultBrand,
    rating: defaultRating,
    productDescription: defaultProductDescription,
    price: defaultPrice,
    image: defaultImage,
  } = singleProductData?.data;

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      productName,
      sportsCategory,
      stockQuantity,
      brand,
      rating,
      productDescription,
      price,
      image,
    };
    console.log("payload:", payload);

    //   update logic
    // const result = await addProduct(payload);
    const result = {};
    console.log(result);
    if (result?.error) {
      toast.error("Failed to add product");
    }
    toast.success("Product added successfully");
  };

  console.log(defaultProductName);
  return (
    <Container>
      <div className="my-28">
        <Title>Update Product</Title>
        <form className="mt-28" onSubmit={handleForm}>
          <Card>
            <CardContent className="space-y-2">
              {/* product name and sports category  */}
              <div className="flex gap-2 w-full mt-2">
                <div className="w-1/2">
                  <Label htmlFor="productName">Product Name</Label>
                  <Input
                    id="productName"
                    type="text"
                    defaultValue={defaultProductName}
                    // value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </div>
                <div className="w-1/2">
                  <Label htmlFor="sportsCategory">Sports Category</Label>
                  <Input
                    id="sportsCategory"
                    type="text"
                    // value={sportsCategory}
                    defaultValue={defaultSportsCategory}
                    onChange={(e) => setSportsCategory(e.target.value)}
                  />
                </div>
              </div>

              {/* stock quantity and brand  */}
              <div className="flex gap-2 w-full mt-2">
                <div className="w-1/2">
                  <Label htmlFor="stockQuantity">Stock Quantity</Label>
                  <Input
                    id="stockQuantity"
                    type="number"
                    // value={stockQuantity}
                    defaultValue={defaultStockQuantity}
                    onChange={(e) =>
                      setStockQuantity(parseFloat(e.target.value))
                    }
                  />
                </div>
                <div className="w-1/2">
                  <Label htmlFor="brand">brand</Label>
                  <Input
                    id="brand"
                    type="text"
                    // value={brand}
                    defaultValue={defaultBrand}
                    onChange={(e) => setBrand(e.target.value)}
                  />
                </div>
              </div>

              {/* rating and product description  */}
              <div className="flex gap-2 w-full mt-2">
                <div className="w-1/2">
                  <Label htmlFor="rating">Rating</Label>
                  <Input
                    id="rating"
                    type="number"
                    // value={rating}
                    defaultValue={defaultRating}
                    onChange={(e) => setRating(parseFloat(e.target.value))}
                  />
                </div>
                <div className="w-1/2">
                  <Label htmlFor="productDescription">
                    Product Description
                  </Label>
                  <Input
                    id="productDescription"
                    type="text"
                    // value={productDescription}
                    defaultValue={defaultProductDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                  />
                </div>
              </div>

              {/* price and image url  */}
              <div className="flex gap-2 w-full mt-2">
                <div className="w-1/2">
                  <Label htmlFor="price">Price ($)</Label>
                  <Input
                    id="price"
                    type="number"
                    // value={price}
                    defaultValue={defaultPrice}
                    onChange={(e) => setPrice(parseFloat(e.target.value))}
                  />
                </div>
                <div className="w-1/2">
                  <Label htmlFor="image">Image URL</Label>
                  <Input
                    id="image"
                    type="text"
                    // value={image}
                    defaultValue={defaultImage}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Update Product</Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </Container>
  );
};

export default UpdateProduct;
