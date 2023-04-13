import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from '../screens/home-landing/Hero';
import Header from '../screens/general/Header';
import Footer from '../screens/general/Footer';

function MainRouter() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Hero />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default MainRouter;