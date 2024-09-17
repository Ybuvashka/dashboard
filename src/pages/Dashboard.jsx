import { createContext, useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { checkDefaultTheme } from "../App";
import { BigSidebar, SmallSidebar, Navbar } from "../components";

const DashboardContext = createContext();

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <DashboardContext.Provider
      value={{
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">{/* <Outlet /> */}</div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
export const useDashboardContext = () => useContext(DashboardContext);
export default Dashboard;
