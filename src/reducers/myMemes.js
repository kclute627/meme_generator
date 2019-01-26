import * as actionTypes from '../actions/index';


const initialState = {
    myMemes: [],
}


const myMemes = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.NEW_MEME:
        return{
            ...state,
            myMemes: [...state.myMemes, action.meme],
            
        }
        default:
        return state;
    }



}



export default myMemes;