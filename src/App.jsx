import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Dashboard} from './pages'
import DashbordChildren from "./pages/DashbordChildren";

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

checkDefaultTheme();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
