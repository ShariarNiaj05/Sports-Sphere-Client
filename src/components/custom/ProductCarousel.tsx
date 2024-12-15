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
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + sliderData.length) % sliderData.length
    );
  };
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden aspect-video">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full"
          >
            {sliderData[currentIndex].type === "3d" ? (
              <ProductViewer isActive={true} />
            ) : (
              <img
                src={sliderData[currentIndex].image}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <p>{sliderData[currentIndex].discountInfo}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
      >
        &#10095;
      </button>
    </div>
  );
};

export default ProductCarousel;
