import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/random-character", fetcher);

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Failed to load</h1>;

  if (!data) return <h1>No Character found!</h1>;

  return (
    <>
      <h1>
        {data.firstName} {data.lastName}
      </h1>
      <h2>Profession: {data.profession}</h2>
      <h2>Age: {data.age}</h2>
      <h2>Twitter: {data.twitterName}</h2>
      <h2>Geohash: {data.geohash}</h2>
    </>
  );
}
