import { useContext } from 'react'
import logoImg from '../assets/logo.jpg'
import Button from './UI/Button'
import CartContext from '../store/CartContext'

export default function Header(){
    const cartCtx = useContext(CartContext)
    const totalCartItems = cartCtx.items.reduce((totalNumbrofItems, item) => {
        return totalNumbrofItems + item.quantity;
    }, 0)
    return (
        <header id='main-header'>
            <div id='title'>
            <img src={logoImg} alt='Logo Image'/>
            <h2>React Food App</h2>
            </div>
            <nav>
                <Button textOnly>CART ({totalCartItems})</Button>
            </nav>
        </header>
    )
}