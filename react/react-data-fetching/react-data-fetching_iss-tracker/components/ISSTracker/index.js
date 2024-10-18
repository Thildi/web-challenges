import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR, { mutate } from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

async function fetcher(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return await response.json();
}

export default function ISSTracker() {
  const { data, error, isLoading, mutate } = useSWR(URL, fetcher, {
    refreshInterval: 5000,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;

  const { longitude = 0, latitude = 0 } = data || {};

  /*   const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  }); */

  /* async function getISSCoords() {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setCoords({ longitude: data.longitude, latitude: data.latitude });
      }
    } catch (error) {
      console.error(error);
    }
  } */

  /*  useEffect(() => {
    const timer = setInterval(() => {
      getISSCoords();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);
 */
  return (
    <main>
      <Map longitude={longitude} latitude={latitude} />
      <Controls
        longitude={longitude}
        latitude={latitude}
        onReload={() => mutate(URL)}
      />
    </main>
  );
}
