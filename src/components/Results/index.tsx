import { useSearchContext } from "../../context/SearchContext";

export const Results = () => {
  const { data } = useSearchContext();

  console.log(data);

  return <div>{data && data.map((item) => <p>{item.id}</p>)}</div>;
};
