import styles from "./App.module.css";
import { useState } from "react";

function App() {
  return (
    <div className={styles.App}>
      <ButtonUseStateExample />
      <br />
      <InputUseStateExample />
      <br />
      <ShowHideUseStateExample />
      <br />
      <CSSStateExample />
      <br />
      <CounterUseStateExample />
    </div>
  );
}

const ButtonUseStateExample = () => {
  const [age, setAge] = useState(0);

  const increaseAge = () => {
    setAge(age + 1);
  };

  return (
    <div>
      {age}
      <br />
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
};

const InputUseStateExample = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange}></input>
      <br />
      {inputValue}
    </div>
  );
};

const ShowHideUseStateExample = () => {
  const [showText, setShowText] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Show/Hide
      </button>
      {showText && <h2>Hi, My Name is Suraj</h2>}
    </div>
  );
};

const CSSStateExample = () => {
  const [textColor, setTextColor] = useState("red");

  const toggleColor = () => {
    setTextColor(textColor === "green" ? "red" : "green");
  };

  return (
    <div>
      <button onClick={toggleColor}>change color</button>
      <h2 style={{ color: textColor }}>Hi, My Name is Suraj</h2>
    </div>
  );
};

const CounterUseStateExample = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Set to Zero</button>
      <br />
      {count}
    </div>
  );
};

export default App;
