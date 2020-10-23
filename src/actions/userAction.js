import Axios from "axios";

const USER_SIGNIN_REQUEST='USER_SIGNIN_REQUEST';
const USER_SIGNIN_SUCCESS='USER_SIGNIN_SUCCESS';
const USER_SIGNIN_FAIL='USER_SIGNIN_FAIL';
const MOVIES_LIST_REQUEST='MOVIES_LIST_REQUEST';
const MOVIES_LIST_SUCCESS='MOVIES_LIST_SUCCESS';
const MOVIES_LIST_FAIL='MOVIES_LIST_FAIL';

const signin=(usr,password)=> (dispatch)=>{

    dispatch({type:USER_SIGNIN_REQUEST,payload:{usr,password}});
    try{
        if(usr==='test' && password==='test'){
        dispatch({type:USER_SIGNIN_SUCCESS,payload:"success"});
        }else{
            dispatch({type:USER_SIGNIN_FAIL,payload:"error"});

        }
    }
    catch(error){
        dispatch({type:USER_SIGNIN_FAIL,payload:"error"});

    }
}



const listMovies=(add)=> async (dispatch)=>{
    try{
        dispatch({type:MOVIES_LIST_REQUEST});
       
            const {data} =await Axios.get("http://www.omdbapi.com/?t="+add+"&apikey=b901fc7b");
            if(data){
    dispatch({type:MOVIES_LIST_SUCCESS,payload:data});
            }else{
        dispatch({type:MOVIES_LIST_FAIL,payload:"error"});

            }
    console.log(data);
        
    
    }
    catch(error){
        dispatch({type:MOVIES_LIST_FAIL,payload:error.message});

    }
    

}

export {listMovies,signin};