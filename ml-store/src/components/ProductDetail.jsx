import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.error("Failed to fetch product:", err));
    }, [id]);

    const handleAddToCart = () => {
        addToCart(product.id, quantity);
        navigate('/cart');
    };

    if (!product) return <div className="text-center mt-5">Loading...</div>;

    return (
        <section className="product-page">
            <div className="container">
                <div className="product-control">
                    <button onClick={() => window.history.back()}>Back to Shop</button>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="product-img">
                            <img src={product.image || 'img/product/default.jpg'} alt={product.name} />
                            {product.status && <div className="p-status">{product.status}</div>}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="product-content">
                            <h2>{product.name}</h2>
                            <h5>${product.price}</h5>
                            <p>{product.description}</p>
                            <ul className="tags">
                                <li><span>Category:</span> {product.category}</li>
                                <li><span>Material:</span> {product.material}</li>
                            </ul>
                            <input
                                type="number"
                                value={quantity}
                                min={1}
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                            />
                            <button onClick={handleAddToCart} className="primary-btn pc-btn">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
