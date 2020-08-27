import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { Title, Button } from '../components'

const InfoText = styled.span`
    width: 15rem;
    font-size: 26px;
    text-align: center;
`

const Home = () => {
    const history = useHistory()
    return (
        <>
            <Title label="Welcome to the Trivia Challenge!"/>
            <InfoText>You will be presented with 10 True or False questions.</InfoText>
            <InfoText>Can you score 100%?</InfoText>
            <Button label="BEGIN" onClick={() => history.push('/quiz')}/>
        </>
    )
}

export default Home
