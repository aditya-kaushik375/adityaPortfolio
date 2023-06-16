import {Link} from 'react-router-dom'
import './index.css'

const PricingCard = () => (
  <div className="pricing">
    <h1 className="heading">Freelancing Fees </h1>
    <div className="card-container">
      <div className="card">
        <h3>Basic</h3>
        <span className="bar" />
        <p className="price">$ 100</p>
        <p>- 3 Days -</p>
        <p>- 3 Pages -</p>
        <p>-Featured-</p>
        <p>-Responsive Design-</p>
        <Link to="/contact">
          <button type="button" className="btn">
            PURCHASE NOW
          </button>
        </Link>
      </div>
      <div className="card">
        <h3>Premium</h3>
        <span className="bar" />
        <p className="price">$ 200</p>
        <p>- 4 Days -</p>
        <p>- 5 Pages -</p>
        <p>-Featured-</p>
        <p>-Responsive Design-</p>
        <Link to="/contact">
          <button type="button" className="btn">
            PURCHASE NOW
          </button>
        </Link>
      </div>
      <div className="card">
        <h3>Business</h3>
        <span className="bar" />
        <p className="price">$ 300</p>
        <p>- 5 Days -</p>
        <p>- 8 Pages -</p>
        <p>-Featured-</p>
        <p>-Responsive Design-</p>
        <Link to="/contact">
          <button type="button" className="btn">
            PURCHASE NOW
          </button>
        </Link>
      </div>
    </div>
  </div>
)

export default PricingCard
