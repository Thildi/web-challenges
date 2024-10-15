import { volumes } from "../../resources/lib/data";
import Link from "next/link";

const Volumes = () => {
  return (
    <div>
      <h1>Volumes</h1>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Volumes;
