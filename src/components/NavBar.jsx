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
          <li>
            <p onClick={() => navigate('/')}>Home</p>
          </li>
          <li>
            <p onClick={() => navigate('/about')}>About</p>
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
