import { useDashboardContext } from "../pages/Dashboard";
import { NavLink } from "react-router-dom";

import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";

const links = [
  {
    text: "add course",
    path: ".",
    icon: <FaWpforms />,
  },
  {
    text: "all courses",
    path: ".",
    icon: <MdQueryStats />,
  },
  {
    text: "stats",
    path: ".",
    icon: <IoBarChartSharp />,
  },
  {
    text: "profile",
    path: ".",
    icon: <ImProfile />,
  },
  {
    text: "admin",
    path: ".",
    icon: <MdAdminPanelSettings />,
  },
];

const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            to={path}
            key={text}
            className="nav-link"
            onClick={isBigSidebar ? null : toggleSidebar}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
