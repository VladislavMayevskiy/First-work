import React from "react";
import "./Home.css";
import product1Image from "../images/product1.png";
import product2Image from "../images/product2.png"


const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Ласкаво просимо!</h1>
            <p className="home-description">
                Ми спеціалізуємося на виготовленні професійних спортивних станків. Гарантуємо якість та надійність продукції.
            </p>

            <div className="product-gallery">
                <div className="product-card">
                    <img src={product1Image} alt="product1" className="product-image"/>
                    <h3>Станок Samson</h3>
                    <p>Професійний станок для армрестлінгу.</p>
                </div>
                <div className="product-card">
                <img src = {product2Image} alt="product2" className="product-image"/>
                    <h3>Станок Power</h3>
                    <p>Ідеальний вибір для тренувань.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
