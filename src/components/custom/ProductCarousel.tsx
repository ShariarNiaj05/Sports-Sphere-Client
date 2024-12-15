import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductViewer from "./ProductViewer";

const sliderData = [
  {
    id: 1,
    image:
      "https://image3.photobiz.com/8929/8_20240325171753_12283431_large.jpg",
    discountInfo: "Swing into Savings! Get up to 30% off on all baseball gear!",
  },
  {
    id: 2,
    image:
      "https://as1.ftcdn.net/v2/jpg/04/12/63/50/1000_F_412635030_v9YpDWequHb60DkMtuFK3IsSSnzBhcIT.jpg",
    discountInfo:
      "Score Big with Rugby! Enjoy discounts up to 25% on select items",
  },
  {
    id: 3,
    image:
      "https://cdn11.bigcommerce.com/s-jdhnct1/images/stencil/1280x1280/products/1923/5215/grunge_fx_soccer_48x72_horz_banner__90022.1550000153.jpg?c=2",
    discountInfo:
      "Kick Off with Great Deals! Save up to 20% on soccer equipment and apparel!",
  },
  {
    id: 4,
    type: "3d",
    discountInfo: "Experience our products in 3D! Rotate to explore.",
  },
];

const ProductCarousel = () => {
  return <div>ProductCarousel</div>;
};

export default ProductCarousel;
