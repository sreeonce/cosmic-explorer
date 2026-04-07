import { useState } from "react";

export default function FactGenerator() {
  const facts = [
    "A day on Venus is longer than a year on Venus.",
    "Neutron stars are so dense that a teaspoon would weigh billions of tons.",
    "Jupiter has the shortest day of all planets.",
    "There are more stars in the universe than grains of sand on Earth.",
    "Mars has the tallest volcano in the solar system.",
    "Saturn could float in water because it’s mostly gas.",
    "The Sun makes up 99.86% of the solar system’s mass.",
    "A year on Mercury is just 88 Earth days.",
    "Black holes can bend time and space.",
    "The Milky Way galaxy will collide with Andromeda someday.",
    "Light from the Sun takes about 8 minutes to reach Earth.",
    "Uranus rotates on its side.",
    "The footprints on the Moon will last millions of years.",
    "Space is completely silent—no air to carry sound.",
    "Pluto is smaller than Earth’s Moon.",
    "Neptune has the fastest winds in the solar system.",
    "The ISS is visible from Earth with the naked eye.",
    "One million Earths could fit inside the Sun.",
    "Comets have glowing tails due to solar radiation.",
    "A full NASA spacesuit costs millions of dollars.",
    "The Moon is slowly drifting away from Earth.",
    "Saturn has over 140 known moons.",
    "Mars sunsets appear blue.",
    "The universe is expanding constantly.",
    "There are rogue planets floating freely in space.",
  ];

  const [fact, setFact] = useState("Click the button to discover a space fact 🚀");

  const generateFact = () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setFact(facts[randomIndex]);
  };

  return (
    <div className="fact-container">
      <div className="fact-card">
        <h2>Space Fact Generator</h2>

        <p className="fact-text">{fact}</p>

        <button onClick={generateFact}>
          Generate Fact
        </button>
      </div>
    </div>
  );
}