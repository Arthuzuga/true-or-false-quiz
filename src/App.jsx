import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import {Home, Quiz, Results} from './pages'
import { StateProvider} from './contexts/answerContext'

const Container = styled.div`
    background-color: lightgrey;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const App = () => {
    return (
        <StateProvider>
            <Container>
                <BrowserRouter>
                    <Switch>
                        <Route path="/quiz">
                            <Quiz />
                        </Route>
                        <Route path="/results">
                            <Results />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </Container>
        </StateProvider>
    )
}

export default App
