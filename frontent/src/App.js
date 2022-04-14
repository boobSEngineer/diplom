import React, {useEffect} from "react";
import './App.css';
import {Route} from "react-router-dom";
import LoginContainer from "./components/Login/LoginContainer";
import ProfileContainer from "./components/Profile/MyProfile/MyProfile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializedThunkCreate} from "./redux/app-reducer";
import HomeContainer from "./components/Home/HomeContainer";
import RegisterContainer from "./components/Login/Registration/RegisterContainer";
import Footer from "./components/Footer/Footer";
import MyFontsContainer from "./components/Profile/MyProfile/MyFonts/MyFontsContainer";
import LikedContainer from "./components/Profile/MyProfile/Liked/LikedContainer";
import ProfileSettingsContainer from "./components/Profile/MyProfile/ProfileSettings/ProfileSettingsContainer";
import UploadFontsContainer from "./components/Profile/MyProfile/UploadFonts/UploadFontsContainer";
import ProfileInfoContainer from "./components/Profile/ProfileCurrentById/ProfileInfoContainer";
import FontContainer from "./components/FontPage/FontContainer";

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
                <Route path="/profile/:id_user?" render={(props) =>
                    <ProfileInfoContainer match={props.match}/>}/>
                <Route path="/font/:id_font?" render={(props) =>
                    <FontContainer match={props.match}/>}/>
                <Route path="/panel_control" render={() => <ProfileContainer/>}/>
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
