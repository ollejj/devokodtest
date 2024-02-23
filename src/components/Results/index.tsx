import { useSearchContext } from "../../context/SearchContext";
import { ResultItem } from "../ReslutItem";

import style from "./index.module.css";

export const Results = () => {
  const { data, input, isError } = useSearchContext();

  console.log(data);

  return (
    <div className={style.container} data-testid="resultsBox">
      {!data ||
        (data.length === 0 && (
          <h1 className={style.no_results}>No Results for "{input}"</h1>
        ))}
      {data &&
        !isError &&
        data.map((item) => <ResultItem key={item.id} {...item} />)}
    </div>
  );
};
