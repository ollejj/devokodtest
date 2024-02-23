import { Searchbar } from "./components/Searchbar";
import { QueryClient, QueryClientProvider } from "react-query";
import { SearchContextProvider } from "./context/SearchContext";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <SearchContextProvider>
          <Searchbar />
        </SearchContextProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
