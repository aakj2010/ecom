import React from 'react'
import StarRating from 'star-rating-react';

function Card({ item, cartItems, handleAddToCart }) {
    return (
        <div className="col-lg-4 mt-1 mb-2 mx-0">
            <div className="card" style={{ width: '15rem' }}>
                <img src="https://picsum.photos/180/150" class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <div className='card-rating'>
                        {/* {item.rating} */}
                        <StarRating
                            size={5}
                            color= "Yellow"
                            value={item.rating}
                        />
                    </div>
                    <p className="card-text">{item.currency}{item.price}</p>

                    <button disabled={cartItems.some((obj) => obj.id === item.id)} onClick={() => { handleAddToCart(item) }} className="btn btn-primary">Add To Cart</button>
                </div>
            </div>
        </div>
    );
}
export default Card;