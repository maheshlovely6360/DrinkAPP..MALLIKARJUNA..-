import {Link} from 'react-router-dom'

const DrinkCard = ({drink}) => (
  <div className="card" style={`{ width: '18rem', margin: '1rem' }`}>
    <img
      src={drink.strDrinkThumb}
      className="card-img-top"
      alt={drink.strDrink}
    />
    <div className="card-body">
      <h5 className="card-title">{drink.strDrink}</h5>
      <p className="card-text">{drink.strCategory}</p>
      <Link to={`/drink/${drink.idDrink}`} className="btn btn-primary">
        View Details
      </Link>
    </div>
  </div>
)

export default DrinkCard
