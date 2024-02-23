import { useQuery } from "react-query";

export const useAutocomplete = (input: string) => {
  const { data, isLoading, isError } = useQuery(["autocomplete", input], () => {
    return (
      input?.length > 0 &&
      fetch(
        `https://api.movies.dcts.se/rpc/movies_autocomplete?q=${input}&limit=5`
      ).then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch autocomplete data");
        }
        return res.json();
      })
    );
  });

  return { data, isLoading, isError };
};
