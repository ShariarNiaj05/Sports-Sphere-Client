import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAddProductMutation } from "@/redux/api/baseApi";
import { toast } from "sonner";

const AddProduct = () => {
  const [productName, setProductName] = useState<string>("");
  const [sportsCategory, setSportsCategory] = useState<string>("");
  const [stockQuantity, setStockQuantity] = useState<number>(0);
  const [brand, setBrand] = useState<string>("");
  const [rating, setRating] = useState<number>(5);
  const [productDescription, setProductDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(100);
  const [image, setImage] = useState<string>("");

  const [addProduct] = useAddProductMutation();

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
    const result = await addProduct(payload);
    console.log(result);
    if (result?.error) {
      toast.error("Failed to add product");
    }
    toast.success("Product added successfully");
  };

  return (
    <form onSubmit={handleForm}>
      <Card>
        <CardContent className="space-y-2">
          {/* product name and sports category  */}
          <div className="flex gap-2 w-full mt-2">
            <div className="w-1/2">
              <Label htmlFor="current">Product Name</Label>
              <Input
                id="productName"
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div className="w-1/2">
              <Label htmlFor="new">Sports Category</Label>
              <Input
                id="sportsCategory"
                type="text"
                value={sportsCategory}
                onChange={(e) => setSportsCategory(e.target.value)}
              />
            </div>
          </div>

          {/* stock quantity and brand  */}
          <div className="flex gap-2 w-full mt-2">
            <div className="w-1/2">
              <Label htmlFor="new">Stock Quantity</Label>
              <Input
                id="stockQuantity"
                type="number"
                value={stockQuantity}
                onChange={(e) => setStockQuantity(parseFloat(e.target.value))}
              />
            </div>
            <div className="w-1/2">
              <Label htmlFor="current">brand</Label>
              <Input
                id="brand"
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
          </div>

          {/* rating and product description  */}
          <div className="flex gap-2 w-full mt-2">
            <div className="w-1/2">
              <Label htmlFor="new">Rating</Label>
              <Input
                id="rating"
                type="number"
                value={rating}
                onChange={(e) => setRating(parseFloat(e.target.value))}
              />
            </div>
            <div className="w-1/2">
              <Label htmlFor="current">Product Description</Label>
              <Input
                id="productDescription"
                type="text"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
              />
            </div>
          </div>

          {/* price and image url  */}
          <div className="flex gap-2 w-full mt-2">
            <div className="w-1/2">
              <Label htmlFor="new">Price ($)</Label>
              <Input
                id="price"
                type="number"
                value={price}
                onChange={(e) => setPrice(parseFloat(e.target.value))}
              />
            </div>
            <div className="w-1/2">
              <Label htmlFor="current">Image URL</Label>
              <Input
                id="image"
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant={"outline"}>Add Product</Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default AddProduct;
