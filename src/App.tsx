import React from 'react';
import './App.css';
import {Header} from './Components/Header/Header'
import {Navbar} from './Components/Navbar/Navbar'
import {Profile} from "./Components/Profile/Profile";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {store} from './redux/redux-store'
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";


const App = () => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={'/'} element={<Profile store={store}/>}/>
                        <Route path={'/Dialogs/*'} element={<DialogsContainer store={store} />}/>
                        <Route path={'/Profile'} element={<Profile store={store}/>}/>
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

