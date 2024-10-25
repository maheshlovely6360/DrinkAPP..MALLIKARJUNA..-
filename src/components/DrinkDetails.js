import {useEffect, useState} from 'react'
import axios from 'axios'

const DrinkDetails = ({match}) => {
  const [drink, setDrink] = useState(null)
  const drinkId = match.params.id

  useEffect(() => {
    const fetchDrinkDetails = async () => {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`,
      )
      setDrink(response.data.drinks[0])
    }
    fetchDrinkDetails()
  }, [drinkId])

  if (!drink) return <p>Loading...</p>

  return (
    <div className="container">
      <h1>{drink.strDrink}</h1>
      <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      <h2>Instructions</h2>
      <p>{drink.strInstructions}</p>
      <h2>Ingredients</h2>
      <ul>
        {Array.from({length: 15}).map((_, index) => {
          const ingredient = drink[`strIngredient${index + 1}`]
          const measure = drink[`strMeasure${index + 1}`]
          return ingredient ? (
            <li>
              {measure} {ingredient}
            </li>
          ) : null
        })}
      </ul>
      <p>
        <strong>Category:</strong> {drink.strCategory}
      </p>
      <p>
        <strong>Glass:</strong> {drink.strGlass}
      </p>
    </div>
  )
}

export default DrinkDetails
