import Link from "next/link";
import { introduction } from "../resources/lib/data";
export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <section>{introduction}</section>
      <h2>
        <Link href="/volumes">All Volumes</Link>
      </h2>
    </div>
  );
}
