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
    let result = w / (h * h)
    return result.toFixed(2);
  }

  const bmi = useMemo(() => calculateBmi(weight, height), [weight, height]);

  return (
    <div className="container">
      <h1>Calculate Body Mass Index</h1>

      {/* input data */}
      <div className="inputs">
        {/* weight */}
        <div className="weight">
          <h4>Weight</h4>
          <input type="range" min="1" max="700" onChange={displayWeight} value={weight} />
          <p>
            Kilograms: 
            <span className="bold">{weight}</span>
          </p>
        </div>
        {/* height */}
        <div className="height">
          <h4>Height</h4>
          <input type="range" min="0.1" max="3" step="0.01" onChange={displayHeight} value={height} />
          <p>
            Meters: 
            <span className="bold">{height}</span>
          </p>
        </div>

        {/* display the BMI */}
        <p className="bmi">Your BMI: {bmi}</p>
      </div>
    </div>
  )
}