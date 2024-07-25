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
            <TableHead>Actions</TableHead>
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
              <TableCell className="text-right">delete, update</TableCell>
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
