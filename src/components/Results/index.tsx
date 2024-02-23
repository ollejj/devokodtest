import { useSearchContext } from "../../context/SearchContext";
import { ResultItem } from "../ReslutItem";

import style from "./index.module.css";

export const Results = () => {
  const { data } = useSearchContext();

  console.log(data);

  return (
    <div className={style.container}>
      {data && data.map((item) => <ResultItem key={item.id} {...item} />)}
    </div>
  );
};
