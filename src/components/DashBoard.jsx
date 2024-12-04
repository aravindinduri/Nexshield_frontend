import Navbar from "./Navbar";
import VulnerabilityList from "./VulerabilityList";
import { useNavigate } from "react-router-dom";

const DashBoad = () => {

  const navigate = useNavigate();
  console.log(localStorage.getItem("isLoggedIn"));

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if(isLoggedIn === false || isLoggedIn === null)
    navigate("/login");

  return(
    <div className="dashboard bg-gray-900 min-h-screen">
      <Navbar />
      <VulnerabilityList/>
    </div>

  )
}

export default DashBoad;
