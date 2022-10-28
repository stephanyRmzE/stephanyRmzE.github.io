import './styles.css'
import NavBar from './components/NavBar'
import Banner from './components/Banner';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer'



function App() {
  return (
    <>
      <NavBar/>
      <Banner/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
