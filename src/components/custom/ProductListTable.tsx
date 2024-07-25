import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  //   TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useProductQuery } from "@/redux/api/baseApi";
import Loading from "../shared/Loading";
import { IProduct } from "@/types/products";
import { Button } from "../ui/button";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";

const ProductListTable = () => {
  const { data, isFetching, isLoading } = useProductQuery({});
  if (isFetching || isLoading) {
    return <Loading />;
  }
  const allProduct = data?.data;
  return (
    <div>
      <Table>
        <TableCaption>All product list.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead className="w-[100px]">Category</TableHead>
            <TableHead className="w-[100px]">Stock</TableHead>
            <TableHead className="text-right w-[100px]">Price ($)</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allProduct?.map((product: IProduct) => (
            <TableRow key={product._id}>
              <TableCell className="font-medium">
                {product.productName}
              </TableCell>
              <TableCell>{product.sportsCategory}</TableCell>
              <TableCell>{product.stockQuantity}</TableCell>
              <TableCell className="text-right">{product.price}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button>
                    <CiEdit className="text-xl" />
                  </Button>
                  <Button variant={"outline"}>
                    <MdDeleteForever className="text-xl" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/*  <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </div>
  );
};

export default ProductListTable;
