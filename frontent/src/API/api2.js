import React from "react";
import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `http://localhost:4000/api/`,
    headers: {
        "Content-Type": "multipart/form-data"
    },
});

export const fileAPI = {
    uploadFile(data) {
        return instance.post(`upload/font`, data)
            .then(response => {
                return response.data
            })
    }
}


