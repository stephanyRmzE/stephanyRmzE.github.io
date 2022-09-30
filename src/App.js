import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './styles.css'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage';
import About from './pages/About';


function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<About/>}/>

        </Routes>

      </Router>

      <ToastContainer/>
    </>
  );
}

export default App;
