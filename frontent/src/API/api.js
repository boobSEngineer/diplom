import React from "react";
import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `http://localhost:4000/api/`,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fontsAPI = {
    getFonts() {
        return instance.get(`fonts/gallery`)
            .then(response => {
                return response.data
            })
    },
    getCurrentFonts(id_user) {
        return instance.post(`fonts/current_fonts`, {id_user})
            .then(response => {
                return response.data
            })
    }

}

export const userAPI = {
    getCurrentUser() {
        return instance.get(`get/me`)
            .then(response => {
                return response.data
            })
    },

    getUsers() {
        return instance.get(`get/users`)
            .then(response => {
                return response.data
            })
    }
}

export const authAPI = {

    logIn(login, password) {
        return instance.post(`auth/login`, {login, password})
            .then(response => {
                return response.data
            })
    },

    logOut() {
        return instance.post(`auth/logout`)
            .then(response => {
                return response.data
            })
    },

    registerUser(login, username, password) {
        return instance.post(`auth/registration`, {login, username, password})
            .then(response => {
                return response.data
            })
    }

}


