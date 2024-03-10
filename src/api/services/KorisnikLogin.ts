import React from "react";
import axios from "axios";
import api from "../http";
export const KorisnikLoginService = {
    getInfo: async() => {
    const { data } = await api.get("/Lekcija?predmetId=3");
    
    console.log(data);

    return data;
}
}