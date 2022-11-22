import { ENV, users } from '../urls'
import axios, * as others from 'axios';

export const sendData = async (data) => {
    await axios.post(`${ENV}${users}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .catch((err) => {
            console.error("Всё...", err)
        })
}