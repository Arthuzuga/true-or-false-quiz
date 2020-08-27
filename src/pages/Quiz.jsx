import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { Title, Button } from '../components'
import getQuestions from '../services/api'
import decodeText from '../helpers/functions'

const QuizBoxContainer = styled.div`
    width: 18rem;
    height: 18rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const QuizBox = styled.div`
    width: 100%;
    height: 16rem;
    border: 1px solid #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 4px;
`

const ButtonRow = styled.div`
    width: 18rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    padding: 4px;
`


const Loading = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 25% 0 0 0;
`

const Quiz = () => {
    const history = useHistory()
    const [isLoading, setLoading] = useState(true)
    const [questions, setQuestions] = useState([])
    const [questionIndex, setQuestionIndex] = useState(0)
    const [answers, setAnswers] = useState([])

    useEffect(() => {
        getQuestions().then(res => {
            setQuestions(res.results)
        }).finally(() => setLoading(false))
    },[])

    useEffect(() => {
        if (answers.length === 10) {
            setLoading(true)
            localStorage.setItem('answers', JSON.stringify(answers))
            setTimeout(() => history.push('/results'), 800)
        }
    },[answers, history])

    const changeQuestion = () => {
        const newIndex = questionIndex +1;
        if (newIndex < 10)
        return setQuestionIndex(newIndex)
    }

    const concatAnswers = (answer) => {
        const data = {
            text: questions[questionIndex].question,
            answer
        }
        const newAnswers = [...answers, data]
        setAnswers(newAnswers)
        return changeQuestion()
    }

    const checkAnswer = (answer) => {
        if(questions[questionIndex].correct_answer === answer) {
            return concatAnswers("correct")
        }
        return concatAnswers("incorrect")
    }

    if (isLoading) {
        return (
            <>
                <Loading>
                    Loading...
                </Loading>
            </>
        )
    }

    return (
        <>
            <Title label={questions[questionIndex].category} size="20px"/>
            <QuizBoxContainer>
                <QuizBox>
                    <span>{decodeText(questions[questionIndex].question)}</span>
                </QuizBox>
                <span>{`${questionIndex+1} of ${questions.length}`}</span>
            </QuizBoxContainer>
            <ButtonRow>
                <Button label="TRUE" onClick={() => checkAnswer("True")}/>
                <Button label="FALSE" onClick={() => checkAnswer("False")}/>
            </ButtonRow>
        </>
    )
}

export default Quiz
