 import Button from "./UI/Button.jsx"
 import {currencyFormatter} from "../util/formatter.js"
 import CartContext from "../store/CartContext.jsx"
 import { useContext } from "react"

export default function MealItems({meals}){

    const cartCtx = useContext(CartContext)
    function handleAddMealToCart(){
        cartCtx.addItem(meals);
    }
    return (
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${meals.image}`}/>
                <div>
                    <h3>{meals.name}</h3>
                    <p  className="meal-item-price">{currencyFormatter.format(meals.price)}</p>
                    <p className="meal-item-description">{meals.description}</p>
                </div>
                <p className="meal-item-actions">
                    <Button onClick={handleAddMealToCart}>
                        Add to Cart
                    </Button>
                </p>
            </article>
        </li>
    )
}