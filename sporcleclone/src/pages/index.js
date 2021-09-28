import { useState } from "react";
import styles from "../../styles/Home.module.css";
import Button from "../components/Button";

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
    <div className={styles.container}>
      <div>
        <h1 style={isGreaterThanTen}>The number is {number}</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Button text={"subtract"} action={handleSubtract} />
          <Button text={"add"} action={handleAdd} />
        </div>
      </div>
    </div>
  );
}
