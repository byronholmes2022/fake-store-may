import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);

        setProducts(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {/*
      1. Wrap the entire component in <BrowserRouter><BrowserRouter> DONE
    */}
      <BrowserRouter>
        {/** 2. Wrap Home and ProductDetails in <Routes> */}
        <Routes>
          {/** 3. Create a separate Route for each page */}
          <Route path="/" element={<Home products={products} />} />
          <Route path="/product/details/:id" element={<ProductDetails />} />
          <Route path="*" element={<Home products={products} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
