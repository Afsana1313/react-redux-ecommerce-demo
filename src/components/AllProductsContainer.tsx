import React, { useEffect, useState } from "react";
import { getData } from "../api";
import SingleProductContainer from "./SingleProductContainer";
import { data } from "../static/data";
import axios from "axios";
import { GetProductType } from "../type/type";
function AllProductsContainer() {
  const [allProducts, setAllProducts] = useState<GetProductType[]>();
  useEffect(() => {
    let arr;
    let fetchData = async () => {
      axios.get(`${process.env.REACT_APP_BASE_URL}`).then((res) => {
        arr = res.data
          ?.filter((i: GetProductType) => i.rating !== null)
          .filter((i: GetProductType) => i.price !== "");
        setAllProducts(arr);
      });
    };
    fetchData();
    console.log(allProducts);
  }, []);
  return (
    <div className="product-container-wrapper">
      {allProducts?.map((i: GetProductType) => (
        <SingleProductContainer
          key={i.id}
          id={i.id}
          name={i.name}
          brand={i.brand}
          price={i.price}
          rating={i.rating}
          image_link={i.image_link}
        />
      ))}
    </div>
  );
}

export default AllProductsContainer;
