import React, {useEffect} from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
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
                <Routes>
                    <Route path="/" exact element={<HomeContainer/>}/>
                    <Route path="/login" element={<LoginContainer/>}/>
                    <Route path="/registration" element={<RegisterContainer/>}/>
                    <Route path="/profile">
                        <Route path=":id_user" element={<ProfileInfoContainer/>}/>
                    </Route>
                    <Route path="/font">
                        <Route path=":id_font" element={<FontContainer/>}/>
                    </Route>
                    <Route path="/panel_control" element={<ProfileContainer/>}/>
                    <Route path="/profile_settings" element={<ProfileSettingsContainer/>}/>
                    <Route path="/my_fonts" element={<MyFontsContainer/>}/>
                    <Route path="/liked" element={<LikedContainer/>}/>
                    <Route path="/fonts_upload" element={<UploadFontsContainer/>}/>
                </Routes>
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
