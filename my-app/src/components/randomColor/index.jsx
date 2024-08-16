import { useState } from "react";

export default function RandomColorGenerator() {
  const [color, setColor] = useState("#000000");
  const [typeOfColor, setTypeOfColor] = useState("HEX");

  const randomGen = (len) => {
    return Math.floor(Math.random() * len);
  };

  const handleRandomColor = () => {
    if (typeOfColor === "HEX") {
      let hexColor = "#";
      const hexCanBe = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
      ];

      for (let i = 0; i < 6; i++) {
        hexColor += hexCanBe[randomGen(hexCanBe.length)];
      }
      setColor(hexColor);
    } else {
      let r = randomGen(256);
      let g = randomGen(256);
      let b = randomGen(256);

      let rgbColor = `rgb(${r},${g},${b})`;

      setColor(rgbColor);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vh",
        backgroundColor: color,
      }}
    >
      <button onClick={() => setTypeOfColor("HEX")}> Create HEX color </button>
      <button onClick={() => setTypeOfColor("RGB")}> Create RGB color </button>
      <button onClick={handleRandomColor}> Create a random Color</button>
      <div>{color}</div>
    </div>
  );
}
