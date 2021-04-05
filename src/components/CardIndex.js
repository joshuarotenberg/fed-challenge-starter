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

` 

const CardIndex = () => {
    return (
        <CardContainer>
            {workoutData.map((data, key) => <Card key={key} {...data}  /> )}
        </CardContainer>
      );
}

export default CardIndex;