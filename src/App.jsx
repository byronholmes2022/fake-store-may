import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Signin from "./pages/Signin";
import MyAccount from "./pages/MyAccount";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // try to get the token from localstorage
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

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
      <BrowserRouter>
        <header>
          {!token && <Link to="/signin">Sign In</Link>}
          {token && (
            <button
              onClick={() => {
                localStorage.removeItem("token");
                setToken(null);
              }}
            >
              Logout
            </button>
          )}
        </header>
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/product/details/:id" element={<ProductDetails />} />
          <Route
            path="/signin"
            element={<Signin setToken={setToken} token={token} />}
          />
          <Route element={<ProtectedRoute />}>
            <Route path="/account" element={<MyAccount />} />
          </Route>

          <Route path="*" element={<Home products={products} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
