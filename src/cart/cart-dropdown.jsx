import {useNavigate} from 'react-router-dom';
import './cart.styles.scss';
import CartItems from './cart-items.jsx';
import {useContext} from 'react';
import {CartContext} from './cart-context.jsx';

const DropDown = ()=>{
    const navigate = useNavigate();
    const {cartItems} = useContext(CartContext);
    const clickToCheckOut = ()=>{
        return navigate('/checkout');
    }
    return(
        <div className='drpdwn-container'>
            <div className='drpdwn-section'>
               {cartItems.map(item => <CartItems key={item.id} cartItem={item} />)}
            </div>
            
            <button onClick={clickToCheckOut} className='drpdwn-btn'>Add to Cart</button>
        </div>
    )
}
export default DropDown;