import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listMovies} from '../actions/userAction';
var Typeahead = require('react-typeahead').Typeahead;

function MoviesList(props){
   
    
    const moviesList=useSelector(state=>state.moviesList);
    const {loading,movies,error}=moviesList;
console.log(moviesList);
    

const dispatch =useDispatch();
useEffect(()=>{
  
   dispatch(listMovies("avengers"));
return()=>{
    //
}

},[])

const submit=(e)=>{
e.preventDefault();

   dispatch(listMovies(e.target.value));

}


    return  <div className="content">
        <div>
<h4>You can see the movie description by typing the movi name below</h4>
        </div>
        
         <Typeahead onChange={(e)=>submit(e)} placeholder="Type Any Movi Name"
    options={['don', 'Avengers', 'avatar', 'joker']}
    maxVisible={2}
  /> 
{loading && <div>Loading....</div> }
{error && "error" }
<div>
{movies && <div><h5>Movi Name: {movies.Title}</h5> </div> }
</div>
<div>
<img className="product-image" src={movies.Poster} alt="product" />  

    </div>
    <div>
    {movies && <div><h5>Cast : {movies.Actors}</h5> </div> }


        </div>

    </div>
}
export default MoviesList;