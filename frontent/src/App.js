import React, {useEffect} from "react";
import './App.css';
import FontsContainer from "./components/Fonts/FontsContainer";
import {Route} from "react-router-dom";
import LoginContainer from "./components/Login/LoginContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializedThunkCreate} from "./redux/app-reducer";

const App = (props) => {
    useEffect(() => {
        props.initializeApp()
    }, []);

    if(props.initialized) {
        return (
            <div className="wrapper">
                <div className="header-top">
                    <HeaderContainer/>
                    <h1>Diplom</h1>
                </div>
                <Route path="/login" render={() => <LoginContainer/>}/>
                <Route path="/profile" render={() => <ProfileContainer/>}/>
                <Route path="/fonts" render={() => <FontsContainer/>}/>
            </div>
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
