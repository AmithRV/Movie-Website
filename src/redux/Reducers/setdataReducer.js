/*
import axios from "axios";

const initialState =  []

const setdataReducer = ( state = initialState, action)=>
{
    let data = [];
    switch (action.type) 
    {
        case 'GET_DATA':        
            axios.get(`https://www.omdbapi.com/?t=${action.payload}&apikey=e2edfeab`)
            .then(result => {  data = result.data} )
            
            return data; 
                
        default:
            return state;
    }
}

export default setdataReducer;
*/