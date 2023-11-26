//Imports
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react';


// Pages
import Home from './pages/Home';
import Courses from './pages/courses';
import Users from './pages/users';

// Components
import Navbar from './components/Navbar';
import LogoutButton from './components/Logout';


// APP
function App() {


  useEffect(() => {
    document.title = "E-Learning"
  }, []);

  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/users' element={<Users />} />
          <Route path='/Logout' element={<LogoutButton />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
