import { SocialIcon } from "react-social-icons"
import '../styles/footer.css'
import { FaHeart } from "react-icons/fa";
function Footer() {

  const footerYear = new Date().getFullYear()
  return (
    <div class="footer">
    <div class="footer-links">
      <SocialIcon
            className= 'social-button'
            bgColor="rgba(0,0,0,0)"
            fgColor="#FFF"
            network="linkedin"
            url="https://www.linkedin.com/in/stephanyramireze/"
          />

          <SocialIcon
            className="social-button"
            bgColor="rgba(0,0,0,0)"
            fgColor="#FFF"
            network="github"
            url="https://github.com/stephanyRmzE"
          />


          <SocialIcon
            className="social-button"
            bgColor="rgba(0,0,0,0)"
            fgColor="#FFF"
            network="mailto"
            url="mailto:stephany.ramireze@gmail.com"
            />
    </div>
  <div class="footer-copyright">
    Copyright &copy; {footerYear} All rights reserved
  </div>
</div>
  )
}

export default Footer
