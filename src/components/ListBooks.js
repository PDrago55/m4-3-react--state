import React from 'react'
import data from 'data'
import styled from 'styled-components'
import Typehead from './Typehead'
import app from './App'

function GetMatches(props){
    console.log("-s--s-s-s-s", matches)
    matches.map(match => {
     return(
         <ul>
        <li>{`${match}`}</li>
         </ul>
     )
    })
}

export default GetMatches