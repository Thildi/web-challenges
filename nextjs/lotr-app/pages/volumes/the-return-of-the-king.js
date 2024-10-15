import Link from "next/link";
import { volumes } from "../../resources/lib/data";
import Image from "next/image";

export default function TheReturnOfTheKing() {
  const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");
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
      <Image
        src="/resouces/public/images/the-return-of-the-king.png"
        alt="Bookcover The Return Of The King"
        width={140}
        height={230}
      />
    </>
  );
}
