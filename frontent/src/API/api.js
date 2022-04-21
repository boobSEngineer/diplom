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
        return instance.get(`fonts/user_fonts/${id_user}`)
            .then(response => {
                return response.data
            })
    },
    getCurrentFont(id_font) {
        return instance.get(`fonts/font/${id_font}`)
            .then(response => {
                return response.data
            })
    },

    deleteFontById(id_font) {
        return instance.post(`fonts/delete_font`, {id_font})
            .then(res => {
                return res.data
            })
    },

    viewFont(id_font) {
        return instance.post(`views/view`, {id_font})
            .then(res => {
                return res.data
            })
    },


    selectBy(parameters) {
        return instance.get(`sort/by?${
            Object.entries(parameters)             // get all [[key0, value0], [key1, value1], ...] pairs 
                .map(c => {
                    return c[0] + "=" + encodeURIComponent(c[1])
                })  // transform into ["key0=value0", "key1=value1", ...]
                .join("&")                         // join into one string "key0=value0&key1=value1&..."
        }`)
            .then(response => {
                return response.data
            })
    },

    likeFont(id_font) {
        return instance.post(`likes/like`, {id_font})
            .then(res => {
                return res.data
            })
    },

}


export const userAPI = {
    getCurrentUser() {
        return instance.get(`get/me`)
            .then(response => {
                return response.data
            })
    },
    getUser(id_user) {
        return instance.get(`get/profile/${id_user}`)
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


