import React from 'react'

export const answersState = []

export const AnswersContext = React.createContext(answersState)

export const StateProvider = ({ children}) =>(
    <AnswersContext.Provider value={answersState}>
      {children}
    </AnswersContext.Provider>
  );
