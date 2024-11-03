import {useContext} from 'react';
import {CartContext} from './cart-context.jsx';
import './cart.styles.scss';

const CheckOutItems = ({items})=>{
    const {removeItemsFromCart, addItemsToCart,clearItemFromCart} = useContext(CartContext);
    const {name, quantity, price, imageUrl}=items;
    return(
            <div className='checkout-container'>
                <div className='checkout-image-container'>
                    <img src={imageUrl} alt={name}/>
                </div>     
                <span className='checkout-name'>{name}</span>
                
                <div className='quantity-container'>
                    <span className='chk-remove' onClick={()=>removeItemsFromCart(items)} >&lt;</span>
                    <span className='chk-quantity'>{quantity}</span>
                    <span className='chk-add' onClick={()=>addItemsToCart(items)} >&gt;</span>
                    
                </div>
                <span className='chk-price'>{price}</span>
                <span  className='delete-button' onClick={()=>clearItemFromCart(items)}>&#10005;</span>
            </div>
        )
    
}
export default CheckOutItems;