import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import Navigation from "./pages/Navigation/Navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="">
        <Routes>
          <Route path="/" element={<Navigation />}>
            {routes.map(({ path, component: Component, index }) => {
              return (
                <Route path={path} index={index} element={<Component />} />
              );
            })}
          </Route>
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
