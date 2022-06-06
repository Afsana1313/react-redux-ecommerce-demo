import React from "react";
import ProductImage from "./ProductImage";
import ProductContent from "./ProductContent";
type GetProp = {
  name: string;
  id: number;
  brand: string;
  price: string;
  price_sign: string;
  image_link: string;
  product_link: string;
  rating: number;
  product_type: string;
  product_api_link: string;
  api_featured_image: string;
};
function SingleProudctContainer({
  id,
  name,
  brand,
  price,
  rating,
  product_api_link,
  api_featured_image,
  image_link
}: any) {
  return (
    <div className="single-product-wrapper">
      <ProductImage image={image_link} />
      <ProductContent name={name} brand={brand} price={price} rating={rating} />
    </div>
  );
}

export default SingleProudctContainer;
