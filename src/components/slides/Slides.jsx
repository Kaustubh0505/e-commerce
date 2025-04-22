import React, { useState, useEffect } from 'react';
import "./Slides.css";

const images = [
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/d03ae6a885c7b4c4.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/dbd07c8f0d822f95.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/f7348d882c44ef33.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/3a2eb1830ef8f3a7.jpeg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/1fbc2026bfa4b74e.jpg?q=20"
];

const Slides = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slides">
            {images.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    className={`slide-image ${index === currentIndex ? "active" : ""}`}
                />
            ))}
        </div>
    );
}

export default Slides;
