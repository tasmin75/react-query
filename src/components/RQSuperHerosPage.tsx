import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:3001/superheros");
};

const RQSuperHerosPage = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    "superheros",
    fetchSuperHeros,

    {
      cacheTime: 5000,
    }
  );

  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{(error as URIError).message}</h2>;
  }

  return (
    <>
      <h2>RQSuperHerosPage</h2>
      {data?.data.map((hero: any) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};

export default RQSuperHerosPage;
