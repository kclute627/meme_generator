
import axios from 'axios'
export const RECEIVE_MEMES = 'RECEIVE_MEMES';
export const SET_MEMES = 'SET_MEMES';



export const setMemes = (memes)=> {
    return{
        type: SET_MEMES,
        memes,
        memesLoaded: true
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




// return dispatch => {
//     axios.get('https://react-my-burger-d3658.firebaseio.com/ingredients.json')
//     .then(response =>{
//         dispatch(setIngredients(response.data))

