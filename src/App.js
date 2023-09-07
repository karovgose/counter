import { useState } from "react";
import Button from "./Button";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <Button onClick={incrementCounter} bodyText="+" />
      <span>{counter}</span>
      <Button onClick={decrementCounter} bodyText="-" />
    </div>
  );
};

export default App;
