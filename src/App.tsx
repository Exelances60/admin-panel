import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./utils/i18n/i18n";
import CircleLoading from "./components/CircleLoading/CircleLoading";
const Login = React.lazy(() => import("./pages/Login/Login"));
const Navigation = React.lazy(() => import("./pages/Navigation/Navigation"));

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="">
        <Suspense fallback={<CircleLoading></CircleLoading>}>
          <Routes>
            <Route path="/" index element={<Login />} />
            <Route path="/" element={<Navigation />}>
              {routes.map(({ path, component: Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
            </Route>
          </Routes>
        </Suspense>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
