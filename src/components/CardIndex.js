import React from 'react';
import Card from './Card';
import { workoutData } from "../services/data";
import styled from 'styled-components'


const CardContainer = styled.div`
    margin-top:40px;        
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
` 

const CardIndex = ({toggleActive, toggleActiveStyle}) => {
    return (
        <CardContainer>
            {workoutData.map((data, key) => <Card id={key} key={key} {...data} toggleActive={toggleActive} toggleActiveStyle={toggleActiveStyle} /> )}
        </CardContainer>
      );
}

export default CardIndex;