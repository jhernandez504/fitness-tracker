import React from 'react'
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';

let CustomButt = styled(DeleteIcon)`
  display: flex;
  justify-content: flex-end;
  transform: scale(.825);
  padding: 5px;
  color: rgba(0, 0, 0, 0.7)
  "&:hover": { color: 'rgba(0, 0, 0, 0.4)'};
  
`

export default function PantryListItem(props){
  // console.log("PANTRYLISTITEM PROPS", props)

  const handleRemove = () =>{
    console.log("CLICK X", props)
    axios.put(`/pantry/food/${props.user._id}`, { foodData: props.food.foodId})
    .then(props.fetchUser())
    .catch((err)=>{
      console.error(err)
    })
  }

  return(
    <>
    <CustomButt sx={{ "&:hover": { color: 'rgba(0, 0, 0, 0.4)'} }} type="button" onClick={handleRemove}></CustomButt>
      <h3>{props.food.foodName}</h3>
    </>
  )
}