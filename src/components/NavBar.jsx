import { useState } from "react"
import "../styles/navbar.css"
import {ReactComponent as FlowerIcon} from '../assets/svg/flower.svg'
import { Link } from "react-scroll";
import logo from '../assets/favicon-32x32.png'

function NavBar() {

  const [isNavExpanded, setIsNavExpanded] = useState(false)


  return (
    <div className="nav-bar">

      <nav className="navigation">

      <a className="navbar-brand" href="/">
        <Link
              className="navExpBut"
              activeClass="active"
              to="banner"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            ><img src={logo} alt="logo" /></Link>

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
          <li  >
            <Link
              className="navExpBut"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >About</Link>
          </li>
          <li >
            <Link
              className="navExpBut"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >Projects</Link>
          </li>
          <li >
            <Link
              className="navExpBut"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >Contact</Link>
          </li>
        </ul>
      </div>
    </nav>


    </div>
  )
}

export default NavBar
