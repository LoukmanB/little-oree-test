import React from "react";
import "./App.scss";
import { QueryClient, QueryClientProvider } from 'react-query';

// Component import
import { Navigation } from "./Navigation/Navigation";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Navigation />
      </div>
    </QueryClientProvider>
  );
};

export default App;
