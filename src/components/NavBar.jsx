import { useState } from "react"
import "../styles/navbar.css"
import { FaSmile } from 'react-icons/fa';
import {ReactComponent as FlowerIcon} from '../assets/svg/flower.svg'
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const navigate = useNavigate()

  return (
    <div>

      <nav className="navigation">
      <p>
        <FaSmile onClick={() => navigate('/')} color="#ac2d95" />
      </p>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        <FlowerIcon fill= '#AC2D95' width='25px' height='25px'/>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </nav>


    </div>
  )
}

export default NavBar
