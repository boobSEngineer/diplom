import React, {useEffect} from "react";
import './App.css';
import FontsContainer from "./components/Fonts/FontsContainer";
import {Redirect, Route} from "react-router-dom";
import LoginContainer from "./components/Login/LoginContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializedThunkCreate} from "./redux/app-reducer";
import HomeContainer from "./components/Home/HomeContainer";
import RegisterContainer from "./components/Login/Registration/RegisterContainer";

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
                <Route path="/fonts" render={() => <FontsContainer/>}/>
                </body>
                <footer>
                </footer>
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
