import {createContext, useState, useEffect} from 'react';
import { getCollectionAndDocuments} from '../dbtest.jsx';


export const ProductsContext = createContext({
    products: {}
});

export const ProductsProvider = ({children})=>{

    const [products, setProducts] = useState({});
    const value = {products};

    useEffect(()=>{
        const getCategoryMap = async()=>{
            const categoryMap= await getCollectionAndDocuments();
            setProducts(categoryMap);
        }
        getCategoryMap();
    },[])

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}