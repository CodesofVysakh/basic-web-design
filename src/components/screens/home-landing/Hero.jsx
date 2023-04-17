import React from 'react';

function Hero() {
    return (
        <section className="hero-main-box wrapper">
            <div className="hero-main-box-left">
                <img src="https://www.freepnglogos.com/uploads/shoes-png/dance-shoes-png-transparent-dance-shoes-images-5.png" alt="Hero Image" />
            </div>
            <div className="hero-main-box-right">
                <h3>Class and Style!</h3>
                <p>Step up your style and comfort with <br />our sleek and cushioned shoes.</p>
                <span className="button">View More</span>
            </div>
        </section>
    )
}

export default Hero;