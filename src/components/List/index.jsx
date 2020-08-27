import React from 'react'
import styled from 'styled-components'
import ItemList from '../ItemList'

const StyledList = styled.ul`
    width: 18rem;
    list-style: none;
    height: 75%;
    overflow-y: auto;

    @media screen and (min-width: 420px) {
        width: 50%;
    }
`

const List = ({items = []}) => {
    return (
        <StyledList>
            {items.map(({text, answer}, index) => (
                <ItemList label={text} answer={answer} key={index} />
            ))}
        </StyledList>
    )
}

export default List
