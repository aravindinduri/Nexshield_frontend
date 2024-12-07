import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import LandingPage from './components/LandingPage';
import Dashboard from './components/DashBoard';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/app/Dashboard" element={<Dashboard />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
