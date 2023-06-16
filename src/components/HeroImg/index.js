import {Link} from 'react-router-dom'
import './index.css'

const HeroImg = () => (
  <div className="container">
    <div className="home">
      <h3>Hi, A SELF MOTIVATED</h3>
      <h1>FULL-STACK DEVELOPER</h1>
      <div>
        <Link to="/project">
          <button type="button" className="button">
            Projects
          </button>
        </Link>
        <Link to="/contact">
          <button type="button" className="button btn-light">
            Contact
          </button>
        </Link>
      </div>
    </div>
  </div>
)

export default HeroImg
