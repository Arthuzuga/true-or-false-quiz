import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { Title, Button, List } from '../components'


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

    const getAnswers = async () => {
        const data = await localStorage.getItem('answers')
        return JSON.parse(data)
    }

    useEffect(() => {
        getAnswers().then(res => {
            setAnswers(res)
            const newScore = res.filter(data => data.answer === "correct").length
            setScore(newScore)
        }).finally(() => setLoading(false))
    },[])

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
            <Title label={`You scored ${score} / ${answers.length}`} size="24px"/>
            <List items={answers}/>
            <Button label="PLAY AGAIN?" onClick={() => history.push("/")}/>
        </>
    )
}

export default Results
