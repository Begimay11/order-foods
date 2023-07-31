import { styled } from "styled-components"

export const Header =()=>{
    return <Headers>
        <RacMeals>ReactMeals</RacMeals>
        <Btns>
            <img src="data:image/png;base64,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" alt="" />
            <p>Your Cart</p>
            <span>7</span>
            </Btns>
        
    </Headers>
}
const Headers = styled.div`
    width: 1440px;
    height: 101px;
    background-color: #8A2B06;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    top: 0;
    left: 0;
`
const RacMeals = styled.div`
    color: #FFFFFF;
    font-family: Poppins;
    font-size: 38px;
    font-weight: 600;
    line-height: 57px;
`
const Btns = styled('button')`
    width: 240px;
    height: 59px;
    border-radius: 30px;
    background: #5A1F08;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    img {
        width: 17.266645431518555px;
        height: 17.5px;
    }
    p {
        font-family: Poppins;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
    }
    span {
        background: #a23b12;
        font-weight: 600;
        padding: 4px 20px;
        border-radius: 30px;
        font-size: 20px;
        margin-left: 1rem;
    }
    :hover{
        background: #a23b12;
    }
;
`