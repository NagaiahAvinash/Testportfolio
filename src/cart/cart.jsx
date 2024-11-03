import {useContext} from 'react';
import {CartContext} from './cart-context.jsx';
import {ReactComponent as CartImg} from '../shop/shopping-bag.svg';
import './cart.styles.scss';

const Cart =()=>{

         const{isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
        const toggleCart = ()=> setIsCartOpen(!isCartOpen);
    return(
        <div onClick={toggleCart}  className='crt-nav'>
            <CartImg className='crt-img' />
            <span className='crt-count'>{cartCount}</span>
        </div>
    )
}
export default Cart;