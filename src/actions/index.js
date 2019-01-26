
import axios from 'axios'
import { username, password } from './secrets';
export const RECEIVE_MEMES = 'RECEIVE_MEMES';
export const SET_MEMES = 'SET_MEMES';
export const NEW_MEME = 'NEW_MEME';



export const setMemes = (memes)=> {
    return{
        type: SET_MEMES,
        memes,
        
    }
}


export const fetchMemesJson = ()=>{
    return dispatch =>{
        axios.get('https://api.imgflip.com/get_memes')
        .then(response => {
            dispatch(setMemes( response.data.data.memes ))

        })

    }
   
}


const newMeme =(meme)=> {
    return{
        type: NEW_MEME,
        meme,

    }
}






const postMemesJson = (params) =>{
    params['username']= username;
    params['password']= password;

    const bodyParams = Object.keys(params).map(key=> {
        return encodeURIComponent(key)+'='+ encodeURIComponent(params[key])
    }).join('&');

    console.log('BODYPARAMS' , bodyParams);

    return fetch('https://api.imgflip.com/caption_image', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: bodyParams
    })
    .then(response=> response.json())
}


export const createMeme = (new_meme_object) =>{
    return dispatch => {
        return postMemesJson(new_meme_object)
        .then(new_meme => dispatch(newMeme(new_meme)))
    }
}


