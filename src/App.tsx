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
import {addPost, state} from './redux/state'


const App = () => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={'/'} element={<Profile state={state.profilePage} addPostCallback={addPost}/>}/>
                        <Route path={'/Dialogs/*'}
                               element={<Dialogs state={state.dialogsPage}/>}/>
                        <Route path={'/Profile'} element={<Profile state={state.profilePage} addPostCallback={addPost}/>}/>
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
