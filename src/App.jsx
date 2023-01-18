import {useState, useMemo} from "react";

export default function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  function displayWeight(e) {
    const kilos = e.target.value;
    setWeight(kilos)
  }
  function displayHeight(e) {
    const long = e.target.value;
    setHeight(long)
  }
  return (
    <div className="container">
      <h1>Calculate Body Mass Index</h1>
      <h4>Weight</h4>
      <input type="range" min="0" max="700" onChange={displayWeight} value={weight} />
      <p>{weight}</p>
      <h4>Height</h4>
      <input type="range" min="0" max="3" step="0.01" onChange={displayHeight} value={height} />
      <p>{height}</p>
    </div>
  )
}