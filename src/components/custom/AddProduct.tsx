import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const AddProduct = () => {
  const [productName, setProductName] = useState<string>("");
  const [sportsCategory, setSportsCategory] = useState<string>("");
  const [stockQuantity, setStockQuantity] = useState<number>(0);
  const [brand, setBrand] = useState<string>("");
  const [rating, setRating] = useState<number>(5);
  const [productDescription, setProductDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState<string>("");

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Product Name:", productName);
    console.log("stock Quantity:", stockQuantity);

    /* 
    
    -----------productName: string
      sportsCategory: string
      ---------stockQuantity: number
      brand: string
      rating: number
      productDescription: string
      price: number
      image: string */
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
              <Label htmlFor="new">Stock Quantity</Label>
              <Input
                id="stockQuantity"
                type="number"
                value={stockQuantity}
                onChange={(e) => setStockQuantity(parseFloat(e.target.value))}
              />
            </div>
          </div>

          {/* stock quantity and brand  */}
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
              <Label htmlFor="new">Stock Quantity</Label>
              <Input
                id="stockQuantity"
                type="number"
                value={stockQuantity}
                onChange={(e) => setStockQuantity(parseFloat(e.target.value))}
              />
            </div>
          </div>

          {/* rating and product description  */}
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
              <Label htmlFor="new">Stock Quantity</Label>
              <Input
                id="stockQuantity"
                type="number"
                value={stockQuantity}
                onChange={(e) => setStockQuantity(parseFloat(e.target.value))}
              />
            </div>
          </div>

          {/* price and image url  */}
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
              <Label htmlFor="new">Stock Quantity</Label>
              <Input
                id="stockQuantity"
                type="number"
                value={stockQuantity}
                onChange={(e) => setStockQuantity(parseFloat(e.target.value))}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Add Product</Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default AddProduct;
