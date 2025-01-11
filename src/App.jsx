import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import LandingPage from './components/LandingPage';
import Dashboard from './components/DashBoard';
import ProfilePage from "./components/profilePage"
import Navbar from './components/Navbar';
function App() {

  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard />}/>
        <Route path='/profile' element={<ProfilePage/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
