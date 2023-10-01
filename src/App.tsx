import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import Navigation from "./pages/Navigation/Navigation";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Navigation />}>
          {routes.map(({ path, component: Component, index }) => {
            return <Route path={path} index={index} element={<Component />} />;
          })}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
