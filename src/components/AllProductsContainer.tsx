import React, { useEffect, useState } from "react";
import { getData } from "../api";
import SingleProductContainer from "./SingleProudctContainer";
import { data } from "../static/data";
import axios from "axios";

function AllProductsContainer() {
  const [allProducts, setAllProducts] = useState<any>();
  useEffect(() => {
    let arr;
    let fetchData = async () => {
      axios.get(`${process.env.REACT_APP_BASE_URL}`).then((res) => {
        arr = res.data
          ?.filter((i: any) => i.rating !== null)
          .filter((i: any) => i.price !== "");
        setAllProducts(arr);
      });
    };
    fetchData();
    console.log(allProducts);
  }, []);
  return (
    <div className="product-container-wrapper">
      {allProducts?.map((i: any) => (
        <SingleProductContainer
          key={i.id}
          id={i.id}
          name={i.name}
          brand={i.brand}
          price={i.price}
          rating={i.rating}
          image_link={i.image_link}
          product_api_link={i.product_api_link}
          api_featured_image={i.api_featured_image}
        />
      ))}
    </div>
  );
}

export default AllProductsContainer;
