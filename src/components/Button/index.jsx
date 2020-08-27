import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    border: none;
    background-color: transparent;
    font-size: 26px;
    margin-bottom: 16px;
    outline: none;
    cursor: pointer;
`

const Button = ({onClick, label}) => {
    return (
        <StyledButton onClick={onClick}>
            {label}           
        </StyledButton>
    )
}

export default Button
