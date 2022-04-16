import React, {useEffect} from "react";
import './App.css';
import {Route, Routes, useNavigate, useSearchParams} from "react-router-dom";
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
import {Loading} from "./components/common/load/load";

const App = (props) => {
    let new_query = Object.fromEntries([...useSearchParams()[0]]);
    const navigate = useNavigate();

    let updateQuery = (update_params) => {
        new_query = {...new_query, ...update_params}
        let new_string = Object.entries(new_query)
            .map(c => {
                return c[0] + "=" + encodeURIComponent(c[1])
            })
            .join("&")
        navigate("/?" + new_string)
    }

    useEffect(() => {
        props.initializeApp()
    }, []);

    if (props.initialized) {
        return (
            <>
                <HeaderContainer updateQuery={updateQuery}/>
                <body className="content">
                <Routes>
                    <Route path="/" exact element={<HomeContainer updateQuery={updateQuery}/>}/>
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
    } else return <><Loading/></>

}

const MapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
    }
}

export default compose(
    connect(MapStateToProps, {initializeApp: initializedThunkCreate})
    (App));
