import axios from 'axios'

export const baseAPIUrl = 'https://wookie.codesubmit.io/'

export const instance = axios.create({
    baseURL: baseAPIUrl,
    headers: {'Authorization': 'Bearer Wookie2019'},
    responseType: 'json'
});