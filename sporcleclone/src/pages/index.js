import { useState } from "react";
import Button from "../components/commons/Button";

export default function Home() {
  const [number, setNumber] = useState(50);

  const handleAdd = () => {
    setNumber(number + 1);
  };

  const handleSubtract = () => {
    if (number <= 0) {
      setNumber(100);
    } else {
      setNumber(number - 1);
    }
  };

  const isGreaterThanTen =
    number > 10 ? { color: "red", fontSize: "50px" } : {};

  return (
    <div>
      <div>
        <h1 style={isGreaterThanTen}>The number is {number}</h1>
        <div>
          <Button text={"subtract"} action={handleSubtract} />
          <Button text={"add"} action={handleAdd} />
        </div>
      </div>
    </div>
  );
}
