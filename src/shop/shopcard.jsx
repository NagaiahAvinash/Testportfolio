import './shopcard.styles.scss';
import {useContext} from 'react';
import {CartContext} from '../cart/cart-context.jsx';

const ShopCard =({product})=>{
    const {addItemsToCart} = useContext(CartContext);

    const addToCartButton =()=>{
        addItemsToCart(product);
    }
    const {name, price, imageUrl} = product;
    return(
        <div className='shopcard'>
            <img className='shpimg' src={imageUrl} alt={name} />
            <span className='shpname'>{name}</span>
            <span className='shpprice'>${price}</span>
            <span onClick={addToCartButton} className='addtocartbutton'>ADD TO CART</span>
        </div>
    )
}

export default ShopCard;