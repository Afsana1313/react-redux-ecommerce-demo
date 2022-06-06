//import Odometer from 'react-odometerjs';
//import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useState } from "react";
import { GetProductType } from "../type/type";
function CartDisplay() {
  const [cartOpen, setCartOpen] = useState(false);
  //  const totalValue = useSelector((state:GetProductType) => state.cart.totalPrice );
  return (
    <div className="cart-display" onClick={(e) => setCartOpen(true)}>
      <div className="cart-icon">{/* <ShoppingCartOutlined /> */}cart</div>
      <div className="cart-item-number">
        {/* {!!cart?.length && cart?.length}
        {cart === undefined || cart?.length === 0
          ? "No Item"
          : cart?.length === 1
          ? " item"
          : " items"} */}
      </div>
      <div className="cart-text">$ TotalValue</div>
    </div>
  );
}

export default CartDisplay;
