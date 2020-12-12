import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

// import AppRouter from "./routes/app.router";
// import AdminRouter from "./routes/admin.router";

const NotFound = lazy(() => import("./components/NotFound"));
const AppRouter = lazy(() => import("./components/app.router"));
const AdminRouter = lazy(() => import("./components/admin.router"));

function App() {
  return (
    <Router>
      {/* <div>hello aman</div> */}
      <ul className="nav-links">
        <li>
          <Link to="/admin">inicio</Link>
        </li>
        <li>
          <Link to="/home">portafolio</Link>
        </li>
      </ul>
      <Suspense fallback={<div>cargando...</div>}>
        <Switch>
          <AppRouter />
        </Switch>
        <Switch>
          <AdminRouter />
        </Switch>
        {/* <Route component={NotFound} /> */}
      </Suspense>
    </Router>
  );
}

export default App;