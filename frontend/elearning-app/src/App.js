//Imports
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Provider } from "react-redux";
import { store } from "./redux/store";


// Pages
import Home from './pages/Home';
import Courses from './pages/courses';
import Users from './pages/users';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';

// Components
import Navbar from './components/Navbar';
import LogoutButton from './components/Logout';


// APP
function App() {


  useEffect(() => {
    document.title = "E-Learning"
  }, []);

  return (
    <div className="App" style={{ BackgroundColor: 'red' }}>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />

          <div className='ParentContainer' >
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Aboutus' element={<Aboutus />} />
              <Route path='/Contactus' element={<Contactus />} />
              <Route path='/course' element={<Courses />} />
              <Route path='/user' element={<Users />} />
              <Route path='/Logout' element={<LogoutButton />} />

            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
    </div>

  );
}

export default App;
