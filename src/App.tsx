import React from 'react';
import './App.css';
import {Header} from './Components/Header/Header'
import {Navbar} from './Components/Navbar/Navbar'
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";


const App = () => {

    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Victor'},
        {id: 4, name: 'Anastasia'},
        {id: 5, name: 'Olga'},
    ]

    let messages = [
        {id: 1, message: 'Whatsup'},
        {id: 2, message: 'Hey?'},
        {id: 3, message: 'Yo?'},
    ]

    let posts = [
        {id: 1, message: 'Hi, how are you?'},
        {id: 2, message: 'My first post'},
    ]

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={'/Dialogs/*'} element={<Dialogs dialogs={dialogs} messages={messages} />}/>
                        <Route path={'/Profile'} element={<Profile posts={posts}/>}/>
                        <Route path={'/News'} element={<News/>}/>
                        <Route path={'/Music'} element={<Music/>}/>
                        <Route path={'/Settings'} element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
