import React from "react";

export default function App() {
  return (
    <div
      onMouseEnter={() => {
        console.log("Event:MouseEnter");
      }}
      onMouseLeave={() => {
        console.log("Event:MouseLeave");
      }}
      style={{ width: "400px", height: "400px", background: "blue" }}
    />
  );
}
