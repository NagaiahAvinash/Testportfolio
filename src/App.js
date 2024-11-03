import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Home1 from './home1.jsx';
import About1 from './about1.jsx';
import Nav from './nav.jsx';
import Chumma from './chumma.jsx';
import Shop from './shop/shop.jsx';
import CheckOut from './cart/checkout.jsx';

const App = ()=> {

  return (
    <Routes>
      <Route path='/' element={<Nav/>}>
        <Route index element={<Home1/>}/>
        <Route path='about' element={<About1/>}/>
        <Route path='signin' element={<Chumma/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='checkout' element={<CheckOut/>}/>
      </Route>
    </Routes>
  );
}

export default App;
