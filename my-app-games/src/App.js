import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/NavBar/Nav";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Location from "./components/Location/Location";
import Search from "./components/Search/Search";
import Footer from "./components/Footer/Footer";
import Faq from "./components/FAQ/faq";
import News from "./components/NavBar/News/News";
import Music from "./components/NavBar/Music/Music";
import Settings from "./components/NavBar/Settings/Settings";
import dialogs from "./components/NavBar/Dialogs/Dialogs";
import Filtres from "./components/Filtres/Filtres";
import Pagination from "./components/Pagination/Pagination";
import Banner from "./components/Banner/Banner";
import SubNav from "./components/SubNav/SubNav";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Location/>
                <Nav/>
                <SubNav/>
                <Banner/>
                <Search />
                <Filtres/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" component={dialogs}/>
                    <Route path="/profile" render={() => <Profile state={props.state.profilePage} addMessage={props.addMessage}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
                <Pagination/>
                <Faq/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
        ;
};

export default App;
