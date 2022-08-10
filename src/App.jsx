import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import CartItem from './CartItem';
import { useState } from 'react';

function App() {
  const products = [
    {
      title: "iPhone",
      price: 40000
    },
    {
      title: "iMac",
      price: 80000
    },
    {
      title: "iWatch",
      price: 30000
    },
    {
      title: "iPad",
      price: 50000
    },
    {
      title: "iPen",
      price: 20000
    }
  ]

  const [cart, setCart] = useState([])

  let addToCart = (item) => {
    setCart([...cart, item]);
  }


  return (
    <div className='container'>
      <div className='row'>
        <div className="col-lg-8">
          <div className="row">
            {
              products.map((item) => {
                return <Card item={item} handleAddToCart={addToCart}></Card>
              })
            }
          </div>
        </div>
        <div className="col-lg-4">
          <div className="row">
            <ol class="list-group list-group-numbered">
              {
                cart.map(() => {
                  return <CartItem></CartItem>;
                })
              }
            </ol>
            <h1>Total - 200</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
