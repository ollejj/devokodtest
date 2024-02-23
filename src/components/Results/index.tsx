import { useSearchContext } from "../../context/SearchContext";
import { ResultItem } from "../ReslutItem";

export const Results = () => {
  const { data } = useSearchContext();

  console.log(data);

  return (
    <div>
      {data && data.map((item) => <ResultItem key={item.id} {...item} />)}
    </div>
  );
};
