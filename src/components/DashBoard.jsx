import Navbar from "./NavBar";
import VulnerabilityList from "./VulerabilityList";
import { useNavigate } from "react-router-dom";

const DashBoad = () => {

  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if(!isLoggedIn)
      return;
  if(isLoggedIn === false || isLoggedIn === null)
    navigate(".");

  return(
    <div className="dashboard bg-gray-900 min-h-screen">
      <Navbar />
      <VulnerabilityList/>
    </div>

  )
}

export default DashBoad;