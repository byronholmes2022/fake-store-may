import React from "react";

import { Link } from "react-router-dom";

function Home({ products }) {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {products.map((item) => {
        return (
          <Link
            to={`/product/details/${item.id}`}
            key={item.id}
            style={{
              width: "27%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid black",
              marginRight: "2%",
              marginBottom: "30px",
              textDecoration: "none",
              color: "black",
            }}
          >
            <p>{item.title}</p>
            <img
              src={item.image}
              alt={item.title}
              style={{ maxWidth: "90%" }}
            />
            <p>{item.price}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default Home;
