
import React from 'react'
import { useState } from 'react';
import Box from '@mui/material/Box';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import BasicMenu from './SelectWorkout.jsx'; 

const WorkoutBox = styled(Box)`
background: rgba(0, 0, 0, 0.2);
height: 125px;
width: 500px;
margin:auto;
overflow-y:auto;
box-sizing: border-box;
box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.5);
padding: 10px
`
const MealBox = styled(Box)`
background: rgba(0, 0, 0, 0.2);
height: 125px;
width: 500px;
margin:auto;
overflow-y:auto;
box-sizing: border-box;
box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.5);
padding: 10px

`
const Refresh = styled(RefreshIcon)`
transform: scale(.9);
  color: rgba(0, 0, 0, 0.7)
  "&:hover": { color: 'rgba(0, 0, 0, 0.4)'};

`

//////////////////////////////////////////////////
export default function Meals(props){
  //MAKES A RANDOM MEAL
/////////////////////////////////////////////////////////////////////
useEffect(()=>{
  randomMeal()
}, []
)

  


let foods = props.user.nutrition
  let foodNum = props.user.nutrition.length;
  let mealSize = props.checkedFoods.length;
  let meal = [];
  let mealReplaceAmts = []

  

  const [newMeal, setNewMeal] = useState(meal)
  const [mealRepAm, setMealRepAm] = useState(mealReplaceAmts)
  const [currentRoutine, setCurrentRoutine] = useState([])
  const [currentRoutineName, setCurrentRoutineName] = useState('')
  
  let exRoutine = currentRoutine
  let calsBurned = exRoutine.length * 150
/////////////////////////////////////////////////
//makes a random meal
const randomMeal = () =>{

  //reset meal replace amounts to empty array
  if (mealReplaceAmts.length === mealSize){
   mealReplaceAmts = []
  }
  //as long as there are enough foods to make a meal
  if(foods.length >= mealSize){

    //sets a random food in each meal index
    for (let i = 0; i < mealSize; i++){
      meal[i] = props.checkedFoods[i]
      //add corresponding replacement amounts to mealReplaceAmts array
      let mealReplenish = calsBurned / mealSize
      mealReplaceAmts[i] = (Math.round((mealReplenish / meal[i].nutDensity)*100)/100)
   }
   setNewMeal(meal)
   setMealRepAm(mealReplaceAmts)

  }
}

////////////////////////////////////////////////////
const handleRefresh = () =>{
  randomMeal()
}
/////////////////////////////////////////////////////////////////////
  return(
    <div style={{fontFamily: "Arial, sans-serif"}}>
      <h1 style={{textAlign: "center"}}>POST-WORKOUT MEALS</h1>
      <div>
      <WorkoutBox >
        <Box
        sx={{display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start'}}
          >

          <BasicMenu 
          sx={{}} 
          routines={props.routines} 
          setCurrentRoutine={setCurrentRoutine}
          setCurrentRoutineName={setCurrentRoutineName}
          currentRoutineName={currentRoutineName}
          />
        </Box>


          {exRoutine.map(exercise=>{
            return (
            <div key={`${exercise.name}`}>
              {exercise.name}
            </div>
              )
          })}

          <br></br>
          <strong >CALORIES BURNED:</strong> {calsBurned}
      </WorkoutBox>
        <br></br>
      <MealBox >
        <div>

          <Box sx={{display: 'flex', flexDirection: 'row'}}>

            <strong>GENERATE MEAL FROM WORKOUT</strong>
            <Refresh sx={{marginLeft: 'auto', marginRight: '0', transform: 'scale(1.25)', color: 'rgba(0, 0, 0, 0.7)', "&:hover": { color: 'rgba(0, 0, 0, 0.4)'}}} onClick={handleRefresh}></Refresh>

          </Box>


            {newMeal.map((food, i)=>{
              console.log("FOOD", food)
              if (food.grams > 1){

                return(
                  <div>
                    <strong>{mealRepAm[i]} grams of {food.foodName}   (~ {Math.floor((mealRepAm[i]/food.grams)*10)/10} servings)</strong>
                    <br></br>
                  </div>
                )

              } else {
                return(
                  <div>
                    <strong>{mealRepAm[i]} grams of {food.foodName}</strong>
                    <br></br>
                  </div>
                )
              }
            })}
          </div>
      </MealBox>
      </div>



    </div>


  )
}

//access saved workout list titles

//access pantry list

//pass a calories burned prop

//create combination of foods to match the calories burned
