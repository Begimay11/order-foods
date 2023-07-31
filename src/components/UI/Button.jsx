import styled from "styled-components"

export const Button = (props)=> {
    return <Btn style={{backgroundColor: props.bgColor, color: props.color}}>{props.children}</Btn>
}
const Btn = styled.button`
      width: Fixed (99px);
        height: Fixed (41px);
        top: 752px;
        left: 1101px;
        padding: 10px 24px 10px 16px;
        border-radius: 20px;
        border: none;
        gap: 10px;
        background-color: #8A2B06;
        color: #FFFFFF;
        margin-top: 10px;
`