import React from 'react';
import './App.css';
import {Header} from './Components/Header'
import {Navbar} from './Components/Navbar'
import {Profile} from "./Components/Profile";
import {findByTitle} from "@testing-library/react";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <Profile/>
        </div>
    );
}

export default App;

