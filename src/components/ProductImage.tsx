import React from "react";

function ProductImage({ image }: any) {
  return (
    <div className="single-product-image-wrapper">
      <img src={image} alt={image} />
    </div>
  );
}

export default ProductImage;
