import Link from "../components/Link";

export default function HomePage({ rooms }) {
  return (
    <div>
      <h1>Home</h1>
      <p>?? light(s) are on.</p>
      <p>
        <Link rooms={rooms} href="/rooms">
          All Rooms →
        </Link>
      </p>
      <p>
        <Link href="/actions">Quick Actions →</Link>
      </p>
    </div>
  );
}
