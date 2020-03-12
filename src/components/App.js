import React from 'react';
import data from '../data'
import Typehead from '../components/Typehead'
import styled from 'styled-components'
//import GetMatches from './ListBooks'

function App(props) {
    return (
    <div>
    <Typehead 
    suggestions={data.books}
    handleSelect={(suggestions) => {
        window.alert(suggestions)
    }}
    />
    </div>
    )
}

export default App;
