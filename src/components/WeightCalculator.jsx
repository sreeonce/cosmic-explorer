import { useState } from "react";

export default function WeightCalculator() {
  const [earthWeight, setEarthWeight] = useState("");
  const [selectedPlanet, setSelectedPlanet] = useState("Mars");
  const [planetWeight, setPlanetWeight] = useState(null);

  // Gravity factors relative to Earth
  const gravity = {
    Mercury: 0.38,
    Venus: 0.91,
    Mars: 0.38,
    Jupiter: 2.34,
    Saturn: 1.06,
    Uranus: 0.92,
    Neptune: 1.19,
  };

  const handleCalculate = () => {
    if (!earthWeight || isNaN(earthWeight) || earthWeight <= 0) {
      alert("Please enter a valid weight!");
      return;
    }

    const weight = (earthWeight * gravity[selectedPlanet]).toFixed(2);
    setPlanetWeight(weight);
  };

  return (
    <div className="calculator-container">
      <div className="calculator-card">
        <h2>Planet Weight Calculator</h2>
        <p className="calculator-subtext">
            Enter your weight to know how much you will weigh on each planet!
        </p>

        {/* Input for Earth Weight */}
        <input
          type="number"
          placeholder="Enter your weight on Earth (kg)"
          value={earthWeight}
          onChange={(e) => setEarthWeight(e.target.value)}
        />

        {/* Dropdown to select planet */}
        <select
          value={selectedPlanet}
          onChange={(e) => setSelectedPlanet(e.target.value)}
        >
          <option>Mercury</option>
          <option>Venus</option>
          <option>Mars</option>
          <option>Jupiter</option>
          <option>Saturn</option>
          <option>Uranus</option>
          <option>Neptune</option>
        </select>

        <button onClick={handleCalculate}>Calculate</button>

        {/* Result */}
        {planetWeight && (
          <div className="results">
            <p>Your weight on {selectedPlanet}: {planetWeight} kg</p>
          </div>
        )}
      </div>
    </div>
  );
}