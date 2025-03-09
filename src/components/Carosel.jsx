import React from 'react';
import '../styles/carosel.css';  // Import the CSS file

const Carosel = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className=" carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="public/assets/carosel-1.jpg"
                            className="d-block w-100 carousel-img"
                            alt="Product 1"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Exclusive Offer: Summer Sale</h5>
                            <p>Up to 50% off on selected products! Don't miss out on great deals.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="public/assets/carosel-2.jpg"
                            className="d-block w-100 carousel-img"
                            alt="Product 2"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Best Selling Products</h5>
                            <p>Explore our most popular products. These are loved by thousands!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="public/assets/carosel-3.jpg"
                            className="d-block w-100 carousel-img"
                            alt="Product 3"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>New Arrivals</h5>
                            <p>Check out our latest collection of products. Fresh stock just arrived!</p>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};

export default Carosel;
