import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Pages
import Home from './pages/Home';
import Courses from './pages/courses';
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
