
import {  SET_MEMES } from '../actions/index';


const initialState = {
   
    memesArr: [],
    
}

const memes = (state = initialState, action)=> {
    switch(action.type){
       
        case SET_MEMES:
        return {
            ...state,
             memesArr: action.memes,
             
        } 
        default:
        return state;

    }

}






export default memes;