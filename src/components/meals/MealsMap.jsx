import { styled } from "styled-components"
import { Button } from "../UI/Button"

export const MealsMap =({ orderFoods })=> {
    return <div>
           <Contain>
            {orderFoods.map((el)=> {
                return <MiniContain>
                    <Card>
                    <h3>{el.foodName}</h3>
                    <p>{el.foodComment}</p>
                    <h4> ${el.foodPrice}</h4>
                    </Card>
                    <Card>
                        <Inputs>
                        <label htmlFor="id">Amount</label>
                        <input type="number" id="id" min={1} placeholder={el.quantity}/>
                        </Inputs>
                        <Button variant='outlined'>+ {el.button}</Button>
                        <Button style={{bgColor: ''}}>e</Button>
                    </Card>
                </MiniContain>
                
            })}
        </Contain>
    </div>
}
const Contain = styled.div`
    height: 564px;
    color: #FFFFFF;
    padding: 15px;
`
const MiniContain = styled.div`
    width: 1039px; 
    background: #FFFFFF;
    color: black;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
    padding: 0 20px 20px 58px;
    border-bottom: 1px solid #D6D6D6;

    h4 {
        width: 67px;
        height: 30px;
        color: #AD5502;
    }
    p {
        font-family: Poppins;
        font-size: 16px;
        font-style: italic;
        font-weight: 400;
        line-height: 24px;
        color: #222222;

    }
    h3 {
        font-family: Poppins;
        font-size: 18px;
        font-weight: 600;
        line-height: 27px;
        letter-spacing: 0px;
        text-align: left;
        color: #222222;

    }
    input {
        width: 60px;
        height: 32px;
        border: 1px solid #d6d6d6;
        border-radius: 6px;
        font-weight: 500;
        font-size: 16px;
        color: #222222;
        padding: 4px 0 4px 12px;

        :focus {
            cursor: pointer;
        }
    }

`
const Inputs = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 4px;
    label {
        width: 75px;
        height: 27px;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
        color: #222222;
    }
`
const Card = styled.div`
margin-top: 30px;
`
