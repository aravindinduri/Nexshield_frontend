import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import LandingPage from './components/LandingPage';
import Dashboard from './components/DashBoard';
import Navbar from './components/NavBar';
import Profile from './components/Profile';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/login" element={<Login />} >
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/app/Dashboard" element={<Dashboard />}/>
        <Route path="/app/Profile" element={<Profile/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
