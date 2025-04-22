import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Header from "./components/header";
import Home from "./components/home/index.jsx";

import { AuthProvider } from "./context/authContext/index.jsx";
import { useRoutes, BrowserRouter } from "react-router-dom";
import './App.css'; 
import Store from "./components/Store.jsx";

function AppRoutes() {
  const routesArray = [
    { path: "*", element: <Login /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/home", element: <Home /> },
    { path: "/store", element: <Store /> },
  ];

  let routesElement = useRoutes(routesArray);

  return (
    <>
      <Header />
      <div className="app-routes-container">
        {routesElement}
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
