import React from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../feature/store";
import { cartType } from "../feature/store";
function ProductContent({ name, brand, price, rating, id, image_link }: any) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    let item: cartType = {
      name,
      price,
      id,
      image_link,
      quantity: 1
    };
    dispatch(actions.addToCart(item));
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
