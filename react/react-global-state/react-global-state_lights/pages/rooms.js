import Link from "../components/Link";
import Lights from "../components/Lights";

export default function Rooms({
  lights,
  toggleLight,
  isOn,
  rooms,
  handleToggle,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>All Rooms</h1>
      <Lights
        rooms={rooms}
        isOn={isOn}
        lights={lights}
        toggleLight={toggleLight}
        handleToggle={handleToggle}
      />
    </>
  );
}
