import { Searchbar } from "./components/Searchbar";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Searchbar />
      </QueryClientProvider>
    </div>
  );
}

export default App;
