import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  //3. use useEffect to fetch the product data from the API; store the data in a state variable (must create this!)
  useEffect(() => {
    // fetch our data
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProductData(json);
      });
  }, []);
  //4. display the product data in this page!
  return (
    <div
      key={productData?.id}
      style={{
        width: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid black",
        margin: "0 auto",
        marginRight: "2%",
        marginBottom: "30px",
      }}
    >
      <p>{productData?.title}</p>
      <img
        src={productData?.image}
        alt={productData?.title}
        style={{ maxWidth: "90%" }}
      />
      <p>{productData?.price}</p>
    </div>
  );
}

export default ProductDetails;
