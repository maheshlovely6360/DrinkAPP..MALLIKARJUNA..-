import {useState} from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import DrinkCard from './DrinkCard'

const Home = () => {
  const [drinks, setDrinks] = useState([])

  const fetchDrinks = async searchTerm => {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`,
    )
    setDrinks(response.data.drinks || [])
  }

  return (
    <div className="container">
      <h1>Drink Mixer</h1>
      <SearchBar onSearch={fetchDrinks} />
      <div className="d-flex flex-wrap">
        {drinks.map(drink => (
          <DrinkCard key={drink.idDrink} drink={drink} />
        ))}
      </div>
    </div>
  )
}

export default Home
