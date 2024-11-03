import {createContext, useState, useEffect} from 'react';
import Products from '../shop/shop-data.json';


const addToCart =(cartItems, productsToAdd)=>{
    //check if the item exists
    const existingCartItems = cartItems.find((items)=> items.id===productsToAdd.id);
    console.log('this is existing cart items', existingCartItems);

    //if yes, then add the item and increase the quantity
    if(existingCartItems){
        return cartItems.map(itemsInCart => itemsInCart.id===productsToAdd.id? {...itemsInCart, quantity: itemsInCart.quantity + 1} : itemsInCart );
    }

    //return items
    return [...cartItems, {...productsToAdd, quantity:1}]
}

const removeFromCart =(cartItems, productsToRemove)=>{
    //check if the item exists
    const existingCartItemsToRemove = cartItems.find((items)=> items.id===productsToRemove.id);

    if(existingCartItemsToRemove.quantity===1){
        return cartItems.filter((items)=> items.id!==productsToRemove.id);
    }

    if(existingCartItemsToRemove){
        return cartItems.map(itemsInCart => itemsInCart.id===productsToRemove.id? {...itemsInCart, quantity: itemsInCart.quantity - 1} : itemsInCart );
    }

}

const itemsToClearFromCart = (cartItems, itemsToClear)=>{
    return( cartItems.filter((items)=> items.id!==itemsToClear.id) );
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: ()=>{},
    cartItems: [],
    addItemsToCart: ()=>{},
    cartCount: 0,
    clearItemFromCart: ()=>{},
    
});


export const CartProvider = ({children})=>{
    const [isCartOpen, setIsCartOpen]= useState(false);
    const [cartItems, setCartItems]= useState([]);
    const [cartCount, setCartCount] =useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(()=>{
       const cartcount = cartItems.reduce((total, cartItems)=>total + cartItems.quantity,0);
       setCartCount(cartcount);
    },[cartItems])

    useEffect(()=>{
        const totalprice = cartItems.reduce((total, cartItems)=>total + (cartItems.quantity * cartItems.price),0);
        setTotalPrice(totalprice);
     },[cartItems])

    const addItemsToCart = (productsToAdd)=>{
        setCartItems(addToCart(cartItems, productsToAdd));
    }
    const removeItemsFromCart = (productsToRemove)=>{
        setCartItems(removeFromCart(cartItems, productsToRemove));
    }

    const clearItemFromCart = (itemsToClear)=>{
        setCartItems(itemsToClearFromCart(cartItems, itemsToClear));
    }

   const value={isCartOpen, setIsCartOpen, cartItems, addItemsToCart,cartCount, removeItemsFromCart,clearItemFromCart, totalPrice};
  return(<CartContext.Provider value={value}>{children}</CartContext.Provider>);
}