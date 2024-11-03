import {Outlet, Link} from 'react-router-dom';
import {Fragment} from 'react';
import{ReactComponent as Logo} from './av.svg';
import {ReactComponent as Abtimg} from './aboutus.svg';
import {ReactComponent as SigninImg} from './login.svg';
import {ReactComponent as LogoutImg} from './logout.svg';
import {ReactComponent as ShopImg} from './shop.svg';
import Cart from './cart/cart.jsx';
import DropDown from './cart/cart-dropdown.jsx';
import {useContext} from 'react';
import {CartContext} from './cart/cart-context.jsx';
import {UserContext} from './context/usercontext.jsx';
import './App.scss';
import {signOutUser, auth} from './dbtest.jsx';



const Nav =()=>{

    const{isCartOpen} = useContext(CartContext);
    const {currentUser} = useContext(UserContext);
    // console.log(isCartOpen, 'this is cartopen');

    
        currentUser? console.log('currentUser after login in',auth.currentUser.email) : console.log('currentUser after logging out', auth.currentUser); 
    
    return(
       <Fragment>
       <div className='nav-bar'>
            <Link to='/'>
                        <Logo className='navsec'/>
                </Link>
             <div className='about-section'>
                <Link to='/about'>
                    <Abtimg className='navsec' />
                </Link>
                <Link to='/shop'>
                    <ShopImg className='navsec'/>
                </Link>
                
                {
                    currentUser? ( <LogoutImg  onClick = {signOutUser} className='navsec' /> ) : (
                        <Link to='/signin'>
                             <SigninImg className='navsec' style={{width: '50px', height: '50px', padding: `10px`}} />
                        </Link>
                        )
                }
                <Cart/>
             </div>
             {isCartOpen && <DropDown />}
             

       </div>
       <div className='main-body'>
       <Outlet />
       </div>
        

       </Fragment>
    );
}
export default Nav;