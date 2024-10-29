import React from 'react'
import PantryList from './PantryList.jsx'
import FoodSearch from './FoodSearch.jsx'
import Meals from './Meals.jsx'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

let AllBox = styled(Box)`
display: flex; 
flex-direction: column; 
align-items: center;

`

let NutBox = styled(Box)`
background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
width: 525px;
border-radius: 5px;

`

export default function Nutrition(props){

  
  // console.log("NUTRITION USER", props.user.nutrition)
  return(
<AllBox>
  <br></br>
    <FoodSearch user={props.user} fetchUser={props.fetchUser}/>
  <NutBox>
    <PantryList fetchUser={props.fetchUser} user={props.user} nutrition={props.user.nutrition}/>
  <br></br>
    <Meals fetchUser={props.fetchUser} user={props.user} nutrition={props.user.nutrition}/>
    <br></br>
  </NutBox>
</AllBox>
  )
}