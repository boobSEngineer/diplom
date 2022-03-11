import React, {useEffect} from "react";
import './App.css';
import {Route} from "react-router-dom";
import LoginContainer from "./components/Login/LoginContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializedThunkCreate} from "./redux/app-reducer";
import HomeContainer from "./components/Home/HomeContainer";
import RegisterContainer from "./components/Login/Registration/RegisterContainer";
import Footer from "./components/Footer/Footer";
import MyFontsContainer from "./components/Profile/MyFonts/MyFontsContainer";
import LikedContainer from "./components/Profile/Liked/LikedContainer";
import ProfileSettingsContainer from "./components/Profile/ProfileSettings/ProfileSettingsContainer";
import UploadFontsContainer from "./components/Profile/UploadFonts/UploadFontsContainer";

const App = (props) => {
    useEffect(() => {
        props.initializeApp()
    }, []);

    if (props.initialized) {
        return (
            <>
                <HeaderContainer/>
                <body className="content">
                <Route path="/" exact render={() => <HomeContainer/>}/>
                <Route path="/login" render={() => <LoginContainer/>}/>
                <Route path="/registration" render={() => <RegisterContainer/>}/>
                <Route path="/profile" render={() => <ProfileContainer/>}/>
                <Route path="/profile_settings" render={() => <ProfileSettingsContainer/>}/>
                <Route path="/my_fonts" render={() => <MyFontsContainer/>}/>
                <Route path="/liked" render={() => <LikedContainer/>}/>
                <Route path="/fonts_upload" render={() => <UploadFontsContainer/>}/>
                </body>
                <Footer/>
            </>

        )
    } else return <div> INITIALIZING...</div>

}

const MapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
    }
}

export default compose(
    connect(MapStateToProps, {initializeApp: initializedThunkCreate})
    (App));
