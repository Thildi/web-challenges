import { useState } from "react"; // useState importieren, um den Zustand zu verwalten
import "./StatusCheck.css";

const apiStatusUrl = "https://example-apis.vercel.app/api/status";

export default function StatusCheck() {
  const [statusIcon, setStatusIcon] = useState("⁉️"); // Standard-Status-Icon
  const [isLoading, setIsLoading] = useState(false); // Zustand für Ladeanzeige

  function handleCheckApiStatus() {
    setIsLoading(true); // Ladeanzeige aktivieren, wenn die Anfrage beginnt
    setStatusIcon("⏳"); // Lade-Icon setzen

    // fetch verwenden, um den API-Status abzurufen
    fetch(apiStatusUrl)
      .then((response) => {
        if (response.ok) {
          setStatusIcon("✅"); // API ist erreichbar
        } else {
          setStatusIcon("❌"); // API hat geantwortet, aber mit einem Fehler
        }
      })
      .catch((error) => {
        console.error("Fehler beim Abrufen des API-Status:", error);
        setStatusIcon("🚨"); // Fehler aufgetreten (Netzwerkproblem)
      })
      .finally(() => {
        setIsLoading(false); // Ladeanzeige deaktivieren
      });
  }

  return (
    <article className="status-check">
      <div className="status-check__wrapper">
        <h2 className="status-check__heading">Status:</h2>
        <span className="status-check__icon">{statusIcon}</span>
      </div>
      <button
        type="button"
        className="status-check__button"
        onClick={handleCheckApiStatus}
        disabled={isLoading} // Button deaktivieren, wenn geladen wird
      >
        {isLoading ? "Überprüfe..." : "API-Status überprüfen"}{" "}
        {/* Button-Text je nach Ladezustand */}
      </button>
    </article>
  );
}
