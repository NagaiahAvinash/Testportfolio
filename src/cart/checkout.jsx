import {useContext} from 'react';
import {CartContext} from './cart-context.jsx';
import CheckOutItems from './checkout-items.jsx';
import './cart.styles.scss';

const headerName= ['Product', 'Description','Quantity','Price','Remove']

const CheckOut =()=>{
    const {cartItems,addItemsToCart,removeItemsFromCart,totalPrice} = useContext(CartContext);

    return(
        <div className='cart-header-container'>
            <div className='cart-header'>
                    {headerName.map((items)=>
                        <div className='cart-header-names'>
                            {items}
                    </div>)
                    }
                
            </div>
            {
                cartItems.map((items)=>
                    <CheckOutItems key={items.id} items={items}/>   
                )
            }
                
                <span className='total'>Total: ${totalPrice}</span>
        </div>
    )
}

export default CheckOut;