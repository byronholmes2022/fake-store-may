// 1. import useState because we need to create a state variable
// to store our API data so we can display to the customer
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  // 2. Create a state variable here to store the data -
  // it will hold an array, and we will map over it to
  // display to the user. THEREFORE we must set it
  // to have an empty array at the start
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);
        // 3. update the state variable to contain the array
        // of API data
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      app
      {/*
    4. map over the state variable to display the data
  
  */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                width: "27%",
              }}
            >
              <p>{item.title}</p>
              <img src={item.image} alt={item.title} height="500px" />
              <p>{item.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
