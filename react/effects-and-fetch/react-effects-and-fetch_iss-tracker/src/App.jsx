import { useEffect, useState } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  // Funktion zum Abrufen der ISS-Koordinaten
  async function getISSCoords() {
    try {
      const response = await fetch(URL);
      const data = await response.json();

      // Koordinaten aktualisieren mit den erhaltenen Daten
      setCoords({
        longitude: data.longitude,
        latitude: data.latitude,
      });
    } catch (error) {
      console.error("Fehler beim Abrufen der ISS-Koordinaten:", error);
    }
  }

  // useEffect für initiales Laden und setInterval für regelmäßige Updates
  useEffect(() => {
    // Hole die ISS-Koordinaten beim ersten Rendern
    getISSCoords();

    // Intervall, um die Koordinaten alle 5 Sekunden zu aktualisieren
    const intervalId = setInterval(() => {
      getISSCoords();
    }, 5000);

    // Bereinige das Intervall beim Unmounten der Komponente
    return () => clearInterval(intervalId);
  }, []); // Leeres dependencies-Array sorgt dafür, dass der Effekt nur einmal läuft

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords} // Übergebe die getISSCoords-Funktion
      />
    </main>
  );
}
