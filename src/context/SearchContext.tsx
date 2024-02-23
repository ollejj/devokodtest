import {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { useQuery } from "react-query";

type TResultItem = {
  id: string;
  title: string;
  overview: string;
  poster: string;
  runtime: number;
  popularity: number;
  genres: string[];
  released: string;
};

const SearchContext = createContext<{
  data: TResultItem[];
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}>({
  data: [],
  input: "",
  setInput: () => {},
});

export const useSearchContext = () => useContext(SearchContext);

type TSearchProviderProps = {
  children: ReactNode;
};

export const SearchContextProvider = ({ children }: TSearchProviderProps) => {
  const [input, setInput] = useState<string>("");

  const { data, isLoading, error } = useQuery(["search", input], () => {
    return (
      input?.length > 0 &&
      fetch(`https://api.movies.dcts.se/rpc/movies_search?q=${input}`).then(
        (res) => res.json()
      )
    );
  });

  console.log(isLoading, error);

  return (
    <SearchContext.Provider value={{ input, setInput, data }}>
      {children}
    </SearchContext.Provider>
  );
};
