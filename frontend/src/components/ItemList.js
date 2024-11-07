// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function ItemList() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/app/items/")
//       .then((response) => setItems(response.data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   return (
//     <div>
//       <h1>Items</h1>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             <strong>{item.name}</strong>: {item.description}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ItemList;
import React, { useEffect, useState } from "react";
import axios from "axios";

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/items/")
      .then((response) => {
        console.log("Data received:", response.data); // Log the data received
        setItems(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h3>Items List</h3>
      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li> // Change "name" to an actual field in your model
          ))}
        </ul>
      ) : (
        <p>No items to display</p> // Display if items array is empty
      )}
    </div>
  );
}

export default ItemList;
