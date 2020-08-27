import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
    width: 18rem;
    font-size: ${({size}) => size};
    font-weight: 800;
    word-break: break-word;
    text-align: center;
`

const Title = ({label, size}) => {
    return (
        <StyledTitle size={size}>
            {label}
        </StyledTitle>
    )
}

export default Title
