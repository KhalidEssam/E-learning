import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Pages
import Home from './pages/Home';
import Courses from './pages/courses';
import Users from './pages/users';
import SignupForm from './pages/Signup';
// Components
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/users' element={<Users />} />
          <Route path='/signup' element={<SignupForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
