// import Header from './components/header';
// import Footer from './components/footer';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
// import './bootstrap.min.css';
// import HomeScreen from './screens/homeScreen';

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <main className='py-3'>
//         <Container>
//           <Route exact path='/' componet={HomeScreen} />
//         </Container>
//       </main>
//       <Footer />
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/header';
import Footer from './components/footer';
import HomeScreen from './screens/homeScreen';
import ProductScreen from './screens/productScreen';
import ProfileScreen from './screens/profileScreen';
import ShippingScreen from './screens/shippingScreen';
import CartScreen from './screens/cartScreen';
import PaymentScreen from './screens/paymentScreen';
import LoginScreen from './screens/loginScreen';
import RegisterScreen from './screens/registerScreen';
import PlaceOrderScreen from './screens/placeOrderScreen';
import OrderScreen from './screens/orderScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />

          <Route path='/payment' component={PaymentScreen} />

          <Route path='/register' component={RegisterScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
