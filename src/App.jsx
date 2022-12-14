import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import CartItem from './CartItem';
import { useState } from 'react';
function App() {
  const products = [
    {
      id: 1,
      title: "iPhone",
      currency : "₹.",
      price: 40000,
      rating: 4.5
    },
    {
      id: 2,
      title: "iMac",
      currency : "₹.",
      price: 80000,
      rating: 3.5
    },
    {
      id: 3,
      title: "iWatch",
      currency : "₹.",
      price: 30000,
      rating: 4
    },
    {
      id: 4,
      title: "iPad",
      currency : "₹.",
      price: 50000,
      rating: 3
    },
    {
      id: 5,
      title: "iPen",
      currency : "₹.",
      price: 20000,
      rating: 4
    }
  ];

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  let addToCart = (item) => {
    setCart([...cart, item]);
    setTotal(total + item.price);
  };

  let removeFromCart = (item) => {
    let index = cart.findIndex((obj) => obj.id === item.id);
    cart.splice(index, 1);
    setCart([...cart]);
    setTotal(total - item.price);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className="col-lg-8">
          <div className="row">
            {
              products.map((item) => {
                return <Card item={item} cartItems={cart} handleAddToCart={addToCart}></Card>
              })
            }
          </div>
        </div>
        <div className="col-lg-4">

          {
            cart.length === 0 ? <div>No Items in Cart</div> : <div className="row">
              <ol class="list-group list-group-numbered">
                {
                  cart.map((cartItem) => {
                    return <CartItem cartItem={cartItem} removeFromCart={removeFromCart}></CartItem>;
                  })
                }
              </ol>
              <h1>Total - {total}</h1>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
