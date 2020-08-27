import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { Title, Button, List } from '../components'
import { AnswersContext } from '../contexts/answerContext'


const Loading = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 25% 0 0 0;
`

const Results = () => {
    const history = useHistory()
    const [isLoading, setLoading] = useState(true)
    const [answers, setAnswers] = useState([])
    const [score, setScore] = useState(0)
    const answersContextState = useContext(AnswersContext);

    useEffect(() => {
        const newScore = answersContextState.filter(data => data.answer === "correct").length
        setScore(newScore)
        setAnswers(answersContextState)
        setLoading(false)
    },[answersContextState])

    if (isLoading) {
        return (
            <>
                <Loading>
                    Calculation Score...
                </Loading>
            </>
        )
    }
    return (
        <>
            <Title label={`You scored ${score} / 10`} size="24px"/>
            <List items={answers}/>
            <Button label="PLAY AGAIN?" onClick={() => history.push("/")}/>
        </>
    )
}

export default Results
