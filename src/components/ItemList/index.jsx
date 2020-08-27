import React from 'react'
import styled from 'styled-components'
import decodeText from '../../helpers/functions'

const StyledItemList = styled.li`
    color: #5C5C5C;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    margin-bottom: 10px;
`

const Icon = styled.span`
    font-size: 36px;
    margin-right: 8px;
    width: 10%;
`
const Text = styled.span`
    font-size: 20px;
    width: 80%;
`

const ItemList = ({label, answer}) => {
    return (
        <StyledItemList>
            <Icon>{answer === "correct" ? "+" : "-"}</Icon>
            <Text>{decodeText(label)}</Text>
        </StyledItemList>
    )
}

export default ItemList
