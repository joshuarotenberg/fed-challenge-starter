import React from 'react';
import styled from 'styled-components'

const CardContainer = styled.div`
    width: 288px;
    height: 280px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
    border-radius:5px;
    margin: 0 30px 30px 0;
`

const MainImage = styled.img`
    width: 288px;
    height: 164px;
`

const CopyWrapper = styled.div`
    display: flex;
    flex-direction:column;
    padding:18px;
`

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.h3`
    font-weight:bold;
    font-size: 16px;
    margin:0px;
`

const Avatar = styled.img`
    height: 28px;
    width: 28px;

`

const DataWrapper = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: start;
    align-items: center;
    font-size:10px;
    margin-top:10px;
`

const Time = styled.span`
    display: flex;
    font-weight:bold;
    flex-direction:row;
    justify-content: start;
    align-items: center;
`       

const Distance = styled.span`
    margin-left:10px;
    display: flex;
    font-weight:bold;
    flex-direction:row;
    justify-content: start;
    align-items: center;
`

const Icon = styled.img`
    height: 13px;
    width: 13px;
    margin-right:5px;
    background: url("/images/timer-icon.png") no-repeat fixed center;
`


const Card = ({title, image, thumb, duration, distance, type}) => {
    
    let series = false;
    if (type === "collection") {
        series = true;
    }
   
    return (
        <CardContainer>
            <MainImage src={thumb}></MainImage>
            <CopyWrapper>
                <HeaderWrapper>
                    <Title>{title}</Title>
                    <Avatar src={image}></Avatar>
                </HeaderWrapper>
                {!series ? <DataWrapper>
                    <Time><Icon src="/images/timer-icon.png" ></Icon>{duration}</Time>
                    <Distance><Icon src="/images/track-icon.png" ></Icon>{distance}</Distance>
                </DataWrapper>
                : ""
                }
            </CopyWrapper>
        </CardContainer>
    );
}

export default Card;