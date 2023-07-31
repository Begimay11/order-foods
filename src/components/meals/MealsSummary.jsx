import styled from "styled-components"
import summeryImage from '../assets/iamges/OrderImg.png'
import { MealsText } from "./MealsText"

export const MealsSummary =()=> {
    return <Text>
        <Image src={summeryImage} alt="summery " />
        <MealsText/>
    </Text>
}
const Text = styled.div`
    width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Image = styled.img`
    width: 1440px;
    height: 432px;
`