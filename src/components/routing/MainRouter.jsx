import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../screens/home-landing/Landing';
import Header from '../screens/general/Header';
import Footer from '../screens/general/Footer';

function MainRouter() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Landing />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default MainRouter;