import React from 'react';
import Banner from '../../Home/components/Banner/Banner';
import Skills from '../components/Skills/Skills';
import Specialty from '../components/Specialty/Specialty';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Specialty/>
            <Skills/>
        </div>
    );
};

export default Home;