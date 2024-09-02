import { useState } from "react";
import Button from "./button";
import upIcon from "./../icons/up.svg"
import downIcon from "./../icons/down.svg"

export default function Counter() {
  const [value, setValue] = useState(0); // Initialize state to keep track of the counter's value

  const HandleIncrease = () => {
    setValue(value + 1); // Increase the counter value by 1
  };
  const HandleDecrease = () => {
    setValue(value - 1); // Decrease the counter value by 1
  };
  const HandleIncreaseFive = () => {
    setValue(value + 5); // Increase the counter value by 5
  };
  const HandleDecreaseFive = () => {
    setValue(value - 5); // Decrease the counter value by 5
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "auto",
          margin: "5px",
          padding: "10px",
          borderRadius: "10px",
          backgroundColor: "LightSkyBlue",
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontFamily: "Arial",
            fontSize: "82px",
            margin: "10px",
            padding: "10px",
          }}
        >
          {value}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <Button
              src={downIcon}
              alt={"down"}
              onClick={HandleDecrease}
            ></Button>
            <Button
              src={upIcon}
              alt={"up"}
              onClick={HandleIncrease}
            ></Button>
          </div>
          <div>
            <Button bgColor={"Lavender"} onClick={HandleDecreaseFive}>
              -5
            </Button>
            <Button bgColor={"Lavender"} onClick={HandleIncreaseFive}>
              +5
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
