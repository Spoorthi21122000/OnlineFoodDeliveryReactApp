import { createContext, useContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => { },
    removeItem: (item) => { }

})

function cartReducer(state, action) {
    if (action.type === 'ADD_ITEMS') {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id)
        const updatedItems = [...state.items]

        if (existingCartItemIndex > -1) {
            const existingItem = state.items[existingCartItemIndex]
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            };
            updatedItems[existingCartItemIndex] = updatedItem
        }
        else {
            updatedItems.push({
                ...action.item,
                quantity: 1
            }
            )
        }
        return { ...state, items: updatedItems }
    }
    if (action.type === 'REMOVE_ITEMS') {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id)
        const existingCartItem = state.items[existingCartItemIndex]
        const updatedItems = [...state.items]
        if (existingCartItemIndex === 1) {
            updatedItems.splice(existingCartItemIndex, 1)
        }
        else {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1
            }
            updatedItems[existingCartItemIndex]  = updatedItem
           
        }
        return { ...state, items: updatedItems }

    }
    return state;
}


export function CartContextProvider({ children }) {

    const[cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });


    function addItem(item){
        dispatchCartAction({type: "ADD_ITEMS", item:item})
    }

    function removeItem(id){
        dispatchCartAction({type: "REMOVE_ITEMS", id:id})
    }
    
    const cartContext = {
        items: cart.items,
        addItem: addItem,
        removeItem: removeItem
    }
    console.log(cartContext)

    return <CartContext.Provider value={cartContext}>
        {children}
    </CartContext.Provider>
}

export default CartContext