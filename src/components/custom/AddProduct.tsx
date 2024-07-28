import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const AddProduct = () => {
  const [productName, setProductName] = useState<string>("");
  const [stockQuantity, setStockQuantity] = useState<number>(0);

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Product Name:", productName);
    console.log("stock Quantity:", stockQuantity);

    /* 
    
    -----------productName: string
      sportsCategory: string
      stockQuantity: number
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
          <div className="space-y-1">
            <Label htmlFor="current">Product Name</Label>
            <Input
              id="productName"
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="new">New password</Label>
            <Input
              id="new"
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(parseFloat(e.target.value))}
            />
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
