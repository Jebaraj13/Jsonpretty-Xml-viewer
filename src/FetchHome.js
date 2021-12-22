import PrettyJsonView from "./PrettyJsonView";
import useFetch from "./useFetch";

const FetchHome = () => {
  const {
    error,
    isPending,
    data: saved,
  } = useFetch("http://localhost:8000/saved");

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {saved && <PrettyJsonView saved_data={saved} />}
    </div>
  );
};

export default FetchHome;
