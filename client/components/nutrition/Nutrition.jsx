import React from 'react'
import PantryList from './PantryList.jsx'
import FoodSearch from './FoodSearch.jsx'
import Meals from './Meals.jsx'
// import './Style.css'
import { styled } from '@mui/material/styles';

export default function Nutrition(props){

  
  // console.log("NUTRITION USER", props.user.nutrition)
  return(
<>
  <br></br>
    <FoodSearch user={props.user}/>
  <br></br>
    <PantryList fetchUser={props.fetchUser} user={props.user} nutrition={props.user.nutrition}/>
  <br></br> 
    <Meals fetchUser={props.fetchUser} user={props.user} nutrition={props.user.nutrition}/>
</>
  )
}