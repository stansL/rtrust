import React from "react";

export default function ProductItem(props) {
  const product = props.product;

  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );
  return (
    <tr>
      <td style={{ width: 200 }}>{name}</td>
      <td style={{ width: 200 }}>{product.price}</td>
    </tr>
  );
}
