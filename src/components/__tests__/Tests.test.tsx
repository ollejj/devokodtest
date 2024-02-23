import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Searchbar } from "../Searchbar/index";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactNode } from "react";
import { Results } from "../Results";

const queryClient = new QueryClient();

const QueryWrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

test("Autocomplete Render Test", () => {
  render(
    <QueryWrapper>
      <Searchbar />
    </QueryWrapper>
  );
  const suggestionBox = screen.getByTestId("suggestionBox");
  expect(suggestionBox).toBeInTheDocument();
});

test("Results Render Test", () => {
  render(
    <QueryWrapper>
      <Results />
    </QueryWrapper>
  );
  const suggestionBox = screen.getByTestId("resultsBox");
  expect(suggestionBox).toBeInTheDocument();
});

/*
test("Query Test", async () => {
  const input = "finding nemo";

  const { result } = renderHook(
    () =>
      useQuery(
        ["search", input],
        () =>
          input?.length > 0 &&
          fetch(`https://api.movies.dcts.se/rpc/movies_search?q=${input}`).then(
            (res) => res.json()
          )
      ),
    { wrapper: TestWrapper }
  );

  expect(result.current.isLoading).toBe(true);
  expect(result.current.data).toBeUndefined();
  expect(result.current.error).toBeNull();

  await waitFor(() => {
    return expect(result.current).toMatchObject({
      id: "tt0266543",
      title: "Finding Nemo",
      overview:
        "Nemo, an adventurous young clownfish, is unexpectedly taken from his Great Barrier Reef home to a dentist's office aquarium. It's up to his worrisome father Marlin and a friendly but forgetful fish Dory to bring Nemo home -- meeting vegetarian sharks, surfer dude turtles, hypnotic jellyfish, hungry seagulls, and more along the way.",
      poster:
        "https://assets.movies.skruv.io/e/H/u/G/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg",
      runtime: 100,
      popularity: 107.887,
      genres: ["Animation", "Family"],
      released: "2003-05-30",
    });
  });
});
*/
