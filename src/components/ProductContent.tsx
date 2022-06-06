import React from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../feature/store";

function ProductContent({ name, brand, price, rating }: any) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(actions.addToCart({ name, price }));
  };
  return (
    <>
      <div className="single-product-text">
        <h3>{name}</h3>
        <span>
          <span>$</span>
          {price}
        </span>
        {/* <span>
        <Rater rating={rating} total={5} interactive={false} />
      </span> */}
      </div>
      <button className="cart-btn" onClick={handleAddToCart}>
        ADD TO CART
      </button>
    </>
  );
}

export default ProductContent;
