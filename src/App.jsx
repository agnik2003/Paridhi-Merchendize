// app.jsx
import React, { useState } from "react";
import Card from "./cards.jsx"; // Importing the Card component

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card title="Card" />
    </>
  );
}

export default App;
