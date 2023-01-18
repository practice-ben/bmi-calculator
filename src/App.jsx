import {useState, useMemo} from "react";

export default function App() {
  const [weight, setWeight] = useState(40);
  const [height, setHeight] = useState(1.5);


  function displayWeight(e) {
    const kilos = e.target.value;
    setWeight(kilos)
  }

  function displayHeight(e) {
    const long = e.target.value;
    setHeight(long)
  }

  function calculateBmi(w, h) {
    return w / (h * h);
  }

  const bmi = useMemo(() => calculateBmi(weight, height), [weight, height]);

  return (
    <div className="container">
      <h1>Calculate Body Mass Index</h1>
      <div className="inputs">
        <div className="weight">
          <h4>Weight</h4>
          <input type="range" min="0" max="700" onChange={displayWeight} value={weight} />
          <p>
            <span className="bold">{weight}</span>
            Kilograms
          </p>
        </div>
        <div className="height">
          <h4>Height</h4>
          <input type="range" min="0" max="3" step="0.01" onChange={displayHeight} value={height} />
          <p>
            <span className="bold">{height}</span>
            Meters
          </p>
        </div>

        <p className="bmi">{bmi}</p>

      </div>
    </div>
  )
}