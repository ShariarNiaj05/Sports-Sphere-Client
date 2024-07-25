import ProductListTable from "@/components/custom/ProductListTable";
import Title from "@/components/custom/Title";
import Container from "@/components/shared/Container";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Manage = () => {
  return (
    <Container>
      <div className="mt-20">
        <Title>Manage Products</Title>
        <div className="mt-20 flex flex-col gap-10  px-5">
          <Tabs defaultValue="productList" className="w-full">
            <TabsList className="grid w-full grid-cols-2 w-[400px] mx-auto mb-10">
              <TabsTrigger value="productList">Product List</TabsTrigger>
              <TabsTrigger value="addProduct">Add Product</TabsTrigger>
            </TabsList>

            {/* Product List tab  */}
            <TabsContent value="productList">
              <ProductListTable />
            </TabsContent>

            {/* Add Product Tab */}
            <TabsContent value="addProduct">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you'll be logged
                    out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    {/* <Label htmlFor="current">Current password</Label> */}
                    <Input id="current" type="password" />
                  </div>
                  <div className="space-y-1">
                    {/* <Label htmlFor="new">New password</Label> */}
                    <Input id="new" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Container>
  );
};

export default Manage;
