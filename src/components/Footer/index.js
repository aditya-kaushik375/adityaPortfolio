import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="footer">
    <div className="footer-container">
      <div className="left">
        <div className="location">
          <FaHome
            size={20}
            style={({color: '#fff'}, {marginRight: '1.5rem'})}
          />
          <p>123 Housing Society,India</p>
        </div>
        <div className="phone">
          <FaPhone
            size={20}
            style={({color: '#fff'}, {marginRight: '1.5rem'})}
          />
          <p>+91 1234567890</p>
        </div>

        <div className="mail">
          <FaMailBulk
            size={20}
            style={({color: '#fff'}, {marginRight: '1.5rem'})}
          />
          <p>adityakaushik375@gmail.com</p>
        </div>
      </div>
      <div className="right">
        <h4>About the Company</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever.
        </p>
        <div className="social">
          <FaFacebook
            size={30}
            style={({color: '#fff'}, {marginRight: '1rem'})}
          />
          <FaTwitter
            size={30}
            style={({color: '#fff'}, {marginRight: '1rem'})}
          />
          <FaLinkedin
            size={30}
            style={({color: '#fff'}, {marginRight: '1rem'})}
          />
        </div>
      </div>
    </div>
  </div>
)

export default Footer
