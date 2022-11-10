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
import { Provider } from 'react-redux';


const App = () => {

    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className='app-wrapper'>
                    <Header/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path={'/'} element={<Profile/>}/>
                            <Route path={'/Dialogs/*'} element={<DialogsContainer/>}/>
                            <Route path={'/Profile'} element={<Profile/>}/>
                            <Route path={'/News'} element={<News/>}/>
                            <Route path={'/Music'} element={<Music/>}/>
                            <Route path={'/Settings'} element={<Settings/>}/>
                        </Routes>
                    </div>
                </div>
            </Provider>
        </BrowserRouter>

    );
}

export default App;

