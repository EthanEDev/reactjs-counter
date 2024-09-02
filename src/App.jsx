import React from "react";
import Counter from "./components/counter";

export default function App() {
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    </>
  );
}
