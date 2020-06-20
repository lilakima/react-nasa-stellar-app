import React, { useState, useEffect } from "react";

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);
  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto() {
      const res = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=5we2u78uV6kZlvG7NVNYNyH9xaYhZzX5JUC0x5lG"
      );
      const data = await res.json();
      setPhotoData(data);
      console.log(data);
    }
  }, []);

  if (!photoData) {
    return <div />;
  }

  return (
    <div>
      {photoData.media_type === "image" ? (
        <img src={photoData.url} alt={photoData.title} />
      ) : (
        <iframe
          title="space-video"
          src={photoData.url}
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          allowFullScreen
          className="photo"
        />
      )}

      <div>
        <h1>{photoData.title}</h1>
        <p>{photoData.date}</p>
        <p>{photoData.explanation}</p>
      </div>
    </div>
  );
}
