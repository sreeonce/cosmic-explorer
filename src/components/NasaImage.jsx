import { useEffect, useState } from "react";

export default function NasaImage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const API_KEY = "LLPf7BDasCI748Pa5ATjSRZOheR200Nifg2sSbZ3"; 

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(() => setError(true));
  }, []);

  if (error) {
    return <p style={{ color: "white" }}>Failed to load NASA data!</p>;
  }

  if (!data) {
    return <p style={{ color: "white" }}>Loading cosmic beauty... ✨</p>;
  }

  return (
    <div className="nasa-container">
      <h1 className="nasa-title">{data.title}</h1>

      {data.media_type === "image" ? (
        <img src={data.url} alt={data.title} className="nasa-image" />
      ) : (
        <iframe
          src={data.url}
          title="NASA video"
          className="nasa-image"
          allowFullScreen
        ></iframe>
      )}

      <p className="nasa-desc">{data.explanation}</p>
    </div>
  );
}