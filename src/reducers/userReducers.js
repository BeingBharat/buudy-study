
const USER_SIGNIN_REQUEST='USER_SIGNIN_REQUEST';
const USER_SIGNIN_SUCCESS='USER_SIGNIN_SUCCESS';
const USER_SIGNIN_FAIL='USER_SIGNIN_FAIL';
const MOVIES_LIST_REQUEST='MOVIES_LIST_REQUEST';
const MOVIES_LIST_SUCCESS='MOVIES_LIST_SUCCESS';
const MOVIES_LIST_FAIL='MOVIES_LIST_FAIL';

function userSigninRducer(state={},action){
    switch(action.type){
        case USER_SIGNIN_REQUEST:
            return {loading:true}
            case USER_SIGNIN_SUCCESS:
                return {loading:false,userInfo:action.payload}
                case USER_SIGNIN_FAIL:
                    return {loading:false,error:action.payload}
                    default :
                    return state;


    }
}
function moviesListReducer(state={movies:{}},action){

    switch (action.type){
        case MOVIES_LIST_REQUEST:
         return {loading :true,movies:{}};
         case MOVIES_LIST_SUCCESS:
             return{loading:false,movies:action.payload};
             case MOVIES_LIST_FAIL:
                 return {loading:false,error:action.payload};
                 default:
                   return  state;
    }
}

export {userSigninRducer,moviesListReducer};