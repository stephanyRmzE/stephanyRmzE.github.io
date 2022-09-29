import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './styles.css'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage';


function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>

      </Router>

      <ToastContainer/>
    </>
  );
}

export default App;
