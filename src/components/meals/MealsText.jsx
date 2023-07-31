import { styled } from "styled-components"

export const MealsText = ()=> {
    return <div>
         <Text>
           <h3>Delicious Food, Delivered To You</h3>
           <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious
            lunch or dinner at home.</p>
            <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by
            experienced chefs!</p>
       </Text>
    </div>
}
const Text = styled.div`
    width: 854px;
  height: 270px;
  background: #383838;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  position: relative;
  margin-top: -15%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #FFFFFF;

    h3 {
        font-family: Manrope;
        font-size: 38px;
        font-weight: 700;
        line-height: 49px;
    }
    p {
        font-family: Poppins;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: center;
        margin-top: 15px;

    }
;
`