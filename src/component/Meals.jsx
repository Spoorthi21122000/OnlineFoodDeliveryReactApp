import { useState, useEffect } from 'react'
import MealItems from './MealItems.jsx'
export default function Meals() {
    const [loadedMeals, setLoadedMeals] = useState([]);
    useEffect(() => {
        async function fetchMeals() {
            const response = await fetch('http://localhost:3000/meals')
            if (!response.ok) {
                <p>error</p>
            }
            const meals = await response.json();
            setLoadedMeals(meals)
        }
        fetchMeals();
    }, [])

    return (
        <ul id='meals'>
            {loadedMeals.map((meal)=>(
                 <MealItems key={meal.id} meals={meal} />
            ))}
       
        </ul>
    )
}