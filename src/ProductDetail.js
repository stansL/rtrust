import React from "react";
import ProductItem from "./ProductItem";

export default function ProductDetail(props) {
  const productDetail = props.productDetail;
  const products = productDetail.products.map((product) => (
    <ProductItem product={product} key={product.name} />
  ));

  return (
    <fieldset>
      <legend>{productDetail.productCategory}</legend>
      <table>
        <thead>
          <tr>
            <th style={{ width: 200 }}>Name</th>
            <th style={{ width: 200 }}>Price</th>
          </tr>
        </thead>
        <tbody>{products}</tbody>
      </table>
    </fieldset>
  );
}
