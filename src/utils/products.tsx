import { useProductQuery } from "@/redux/api/baseApi";

export const useAllProducts = () => {
  const { data, isFetching, isLoading } = useProductQuery(
    {},
    {
      pollingInterval: 30000,
    }
  );

  return {
    data,
    isFetching,
    isLoading,
  };
};
