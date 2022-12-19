import axios from "axios";

export const http = axios.create({
    baseURL: 'https://api.dev.wdtek.xyz'
})