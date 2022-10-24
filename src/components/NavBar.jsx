import { useState } from "react"
import "../styles/navbar.css"
import {ReactComponent as FlowerIcon} from '../assets/svg/flower.svg'
import { useNavigate } from "react-router-dom";
import logo from '../assets/favicon-32x32.png'
function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const navigate = useNavigate()

  return (
    <div>

      <nav className="navigation">
      <a class="navbar-brand" href="/">
        <img src={logo} alt="logo"/>
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        <FlowerIcon fill= '#52007a' width='25px' height='25px'/>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li  onClick={() => navigate('/')}>
            <p className="navExpBut" >Home</p>
          </li>
          <li onClick={() => navigate('/about')}>
            <p className="navExpBut" >About</p>
          </li>
          <li onClick={() => navigate('/contact')}>
            <p className="navExpBut">Contact</p>
          </li>
        </ul>
      </div>
    </nav>


    </div>
  )
}

export default NavBar
