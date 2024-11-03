import './cart.styles.scss';

const CartItems =({cartItem})=>{
    const {name, quantity, imageUrl, price} = cartItem;
    
    return(
        <div className='item-container'>
                <img className='item-image' src={imageUrl} alt={name} />
                <div className='item-details-container'>
                    <span className='item-name'>{name}</span>
                    <span className='item-amount'>{quantity} * ${price}</span>
                </div> 
        </div>
    )
}

export default CartItems;