import './Card.css'; // Import the CSS file

const CARD = ({ title, price, savings, features, buttonLabel, showSavings, mostPopular }) => {
  return (
    <div className={`card ${mostPopular ? 'most-popular' : ''}`}>
      {mostPopular && <p className="most-popular-label">Most Popular</p>}
      <h2>{title}</h2>
      <div className='overall-div'>
        <div className='pricing-figures'>
          <p className="price">$</p>
          <span className='price-dollar'>{price}</span>
          <span className='price-duration'>Per agent/mo</span>
        </div>
        {showSavings && savings && (
          <div className='pricing-savings'>
            <p className="savings">{savings} Savings*</p>
          </div>
        )}
      </div>
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
        <div className='price-button-container'>
          <a className='price-button'>
            {buttonLabel}
          </a>
          <img className='img-rotate' src="https://assets.www.happyfox.com/v2/images/down-arrow.svg" alt=""/>
        </div>
      </ul>
    </div>
  );
};

export default CARD;
