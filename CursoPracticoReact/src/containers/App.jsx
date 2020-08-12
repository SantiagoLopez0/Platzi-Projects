/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable arrow-parens */
import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const App = () => {
    const initialState = useInitialState(API);
    const initialStateKeys = Object.keys(initialState);

    return initialState.length === 0 ? <h1>Loading</h1> : (
        <div className='App'>
            <Header />
            <Search />
            {initialStateKeys.map(item => (
                initialState[item].length > 0 && (
                    <Categories title={item}>
                        <Carousel>
                            {initialState[item].map(item => <CarouselItem key={item.id} {...item} />)}
                        </Carousel>
                    </Categories>
                )))}
            <Footer />
        </div>
    );
};

export default App;
