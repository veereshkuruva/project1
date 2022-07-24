import React from 'react'
import { useState } from 'react'
import Data from './Data'
import List from './List'

const App = () => {
  const [peopels,setPeoples] =useState(Data)
  return (
    
    <div  className='container'>
      <center> 
        <h1>Birthday Project</h1>
      <h3> {peopels.length}, peoples birthday</h3>
      <List people={peopels}/>   
      <button  style={{ color:"red",border:"2px solid black"}}onClick={()=>setPeoples([])}> clear all</button>
      </center>
    </div>
  )
}

export default App
