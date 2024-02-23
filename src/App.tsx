import { Searchbar } from "./components/Searchbar";
import { QueryClient, QueryClientProvider } from "react-query";
import { SearchContextProvider } from "./context/SearchContext";
import { Results } from "./components/Results";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <SearchContextProvider>
          <Searchbar />
          <Results />
        </SearchContextProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
