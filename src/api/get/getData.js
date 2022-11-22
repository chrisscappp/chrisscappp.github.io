import axios, * as others from 'axios';

export const getData = (url) => {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
                console.error('PIECE DA')
            })
    })
}