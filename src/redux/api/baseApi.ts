// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
const baseUrl = "http://localhost:5000/api/v1";
// const baseUrl = "https://sports-sphere-server-swart.vercel.app//api/v1";
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    product: builder.query({
      query: () => ({
        url: "/product",
        method: "GET",
      }),
    }),
    singleProduct: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useProductQuery, useSingleProductQuery } = baseApi;
