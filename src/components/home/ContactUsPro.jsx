import styled from "styled-components"
import Button from "../common/Button";

const ContactUsPro = () => {

  const ContactUsDisplay = () => {
    return (
      <div>
        Contactez nous
      </div>
    )
  }

  const handleButtonClick = () => {

  }

  return (
    <StyledContactUsPro>
      <StyledText>Vous souhaitez inscrire votre restaurant</StyledText>
      <Styledh2>C'est gratuit !</Styledh2>
      <Button action={handleButtonClick} Display={ContactUsDisplay} />
    </StyledContactUsPro>
  )
}

const StyledContactUsPro = styled.div`
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
`;

const StyledText = styled.p`
  font-size: 1.2em;
`;

const Styledh2 = styled.h2`
  margin-top: 8px;
  font-size: 3em;
`;

export default ContactUsPro;