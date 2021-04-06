import React from 'react';
import styled from 'styled-components';



const ImageWrapper = styled.div`
   position:relative;
   display: inline-block;
`
const Overlay = styled.div`
    position: absolute;
    top:0;
    right:0;
    width:115px;
    height:164px;
    z-index:9999;
    background: rgba(0, 0, 0, 0.5);
    border-top-right-radius: 5px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`

const SeriesCount = styled.span`
    color:white;
    font-size:24px;
    font-weight:800;
`
const SeriesText = styled.span`
     color:white;
    font-size:10px;
    font-weight:bold;
    margin-top:5px;
`

const MainImage = styled.img`
    width: 288px;
    height: 164px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    z-index:99;
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
    align-items: start;
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

const SeriesIcon = styled.img`
    height: 24px;
    width: 24px;
    background: url("/images/series-icon.png") no-repeat fixed center;
    margin-top:10px;
`


const Card = ({title, image, thumb, duration, distance, type, numWorkouts, toggleActive, id, toggleActiveStyle}) => {
    
    let series = false;
    if (type === "collection") {
        series = true;
    }

   
    return (
        <div className={toggleActiveStyle(id)} onClick={() => toggleActive(id)} >
            {series ? <ImageWrapper>
                <Overlay>
                    <SeriesCount>{numWorkouts}</SeriesCount>
                    <SeriesText>WORKOUTS</SeriesText>
                    <SeriesIcon src="/images/series-icon.png" alt="series icon"></SeriesIcon>
                </Overlay>
                <MainImage src={thumb} alt={title}></MainImage>
            </ImageWrapper>
            : <MainImage src={thumb} alt={title}></MainImage>
            }
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
        </div>
    );
}

export default Card;