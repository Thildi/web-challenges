import Link from "next/link";
import { volumes } from "../../resources/lib/data";
export default function FellowshipOfTheRing() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      {volume.books.map((book) => (
        <li key={book.ordinal}>
          {book.ordinal}: {book.title}
        </li>
      ))}
    </>
  );
}
