import { useQuery } from "react-query";

export const useAutocomplete = (input: string) => {
  const { data, isLoading, error } = useQuery(["autocomplete", input], () => {
    return (
      input?.length > 0 &&
      fetch(
        `https://api.movies.dcts.se/rpc/movies_autocomplete?q=${input}&limit=5`
      ).then((res) => res.json())
    );
  });

  return { data, isLoading, error };
};
