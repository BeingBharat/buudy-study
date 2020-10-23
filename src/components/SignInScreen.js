import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signin} from '../actions/userAction';


function SignInScreen(props){
    const [usr,setUsr]=useState('');
    const [password,setPassword]=useState('');
    const userSignin=useSelector(state=>state.userSignin);
    const {loading,userInfo,error}=userSignin;
const dispatch =useDispatch();
useEffect(()=>{
    if(userInfo){
        props.history.push('/movieslist');
    }
return()=>{
    //
}

},[userInfo])
const submitHandler=(e)=>{
e.preventDefault();
dispatch(signin(usr,password));
}


    return <div className="form">
        <form onSubmit={submitHandler} >
            <ul className="form-container">
                <li>
                    <h2>Sign-In</h2>
                </li>
                <li>
                    {loading && <div>Loading....</div>}
                    {error && <div>{error}</div>}
                </li>
                <li className="">
                <label htmlFor="email">
                    UserName
                </label>
                <input type="usr" name="usr" id="usr" onChange={(e)=>setUsr(e.target.value)} />
                                </li>
                                <li className="">
                <label htmlFor="password">
                    Password
                </label>
                <input type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)} />
                </li>
                <li>
                    <button className="button primary" type="submit">SignIn</button>
                </li>
                <li>
                    New to amazon?
                </li>
               
            </ul>

        </form>

    </div>
}
export default SignInScreen;