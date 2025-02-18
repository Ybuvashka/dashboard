import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import Wrapper from "../assets/wrappers/LogoutContainer";
import { useState } from "react";
// import { useDashboardContext } from "../pages/Dashboard";

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  // const {user, logoutUser} = useDashboardContext();
  return (
    <Wrapper>
      <button
        type="button"
        className="btn logout-btn"
        // onClick={() => setShowLogout(!showLogout)}
      >
        <FaUserCircle/>
        {/* {user?.name} */}
        John
        <FaCaretDown/>
      </button>
      <div className={showLogout
      ?'show-dropdown dropdown'
      :'dropdown'}>
       <button 
       type="button" 
       className="dropdown-btn" 
      //  onClick={logoutUser}
       >
        logout
       </button>
      </div>
    </Wrapper>
  );
}
export default LogoutContainer