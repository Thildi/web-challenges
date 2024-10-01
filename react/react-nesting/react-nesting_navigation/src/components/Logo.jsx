import Image from "./Image"; // Importiere die Image-Komponente
import logo from "../img/logo.jpg"; // Importiere das Logo-Bild

export default function Logo() {
  return (
    <a href="#">
      <Image src={logo} alt="logo" /> {/* Verwende die Image-Komponente */}
    </a>
  );
}
