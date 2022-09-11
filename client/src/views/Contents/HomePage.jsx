import React from 'react';
import HeroSection from "./HeroSection ";
import Lifestyle from "./Lifestyle";
import CardGrid from "./CardGrid";
const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <CardGrid />
            <Lifestyle />
        </div>
    );
};

export default HomePage;