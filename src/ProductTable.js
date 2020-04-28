import React from "react";
import ProductDetail from "./ProductDetail";

export default function ProductTable(props) {
  const productDetails = props.productDetails.map((productDetail) => (
    <ProductDetail productDetail={productDetail} key={productDetail.productCategory} />
  ));

  return (
    <fieldset>
      <legend>Product Listings</legend>
      {productDetails}
    </fieldset>
  );
}
