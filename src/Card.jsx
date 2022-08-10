function Card({ item, handleAddToCart }) {
    return (
        <div className="col-lg-4 mt-1 mb-2 mx-0">
            <div className="card" style={{ width: '15rem' }}>
                <img src="https://picsum.photos/180/150" class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.price}</p>
                    <button onClick={() => { handleAddToCart(item) }} className="btn btn-primary">Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Card;