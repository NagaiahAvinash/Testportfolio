import {useContext} from 'react';
import {ProductsContext} from './shopcontext';
import ShopCard from './shopcard';
import './shopcard.styles.scss';

const Shop = () =>{
    const {products} = useContext(ProductsContext);
    return(
            Object.keys(products).map((title)=>(
                <div Fragment  className='shopcard-div'>
                    <h1 className='shopcard-heading'>{title.toUpperCase()}</h1>
                    <div className='shopcard-container'>
                        {
                            products[title].map((product)=>
                                (<ShopCard key={product.id} product= {product} /> ) )
                        }
                    </div>
                </div>
            ))
                   
       
    )
}

export default Shop;