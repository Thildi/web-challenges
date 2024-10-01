import Image from "./Image"; // Importiere die Image-Komponente
import avatar from "../img/avatar.jpg"; // Importiere das Avatar-Bild

export default function Avatar() {
  return (
    <button
      type="button"
      onClick={() => console.log("I could toggle a profile!")}
      aria-label="toggle profile"
    >
      <Image src={avatar} alt="avatar" /> {/* Verwende die Image-Komponente */}
    </button>
  );
}
