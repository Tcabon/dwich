import styled from "styled-components";
import clapIcon from "../../assets/icons/clapIcon.png";


const HowItWorks = () => {
  return (
    <StyledHowItWorksWrapper>
      <StyledOl>
        <StyledLi>
          <StyledCircle>1</StyledCircle>
          <StyledText>Sélectionnez un restaurant</StyledText>
        </StyledLi>
        <StyledLi>
          <StyledCircle>2</StyledCircle>
          <StyledText>Choisissez vos plats</StyledText>
        </StyledLi>
        <StyledLi>
          <StyledCircle>3</StyledCircle>
          <StyledText>Invitez vos amis</StyledText>
        </StyledLi>
        <StyledLi>
          <StyledCircle>4</StyledCircle>
          <StyledText>Attribuez les plats</StyledText>
        </StyledLi>
        <StyledLi>
          <StyledIcon src={clapIcon} alt="clap icon" />
          <StyledH3>Mangez en toute tranquilité</StyledH3>
        </StyledLi>
      </StyledOl>
    </StyledHowItWorksWrapper>
  )
}

const StyledHowItWorksWrapper = styled.div`
  background-color: #fff;
  padding: 20px 0 20px 0;
  border-radius: 10px;
`;

const StyledOl = styled.ol`
  padding-left: 20px;
  list-style-type: none;
`;

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: 5px;
`;

const StyledCircle = styled.div`
  width: 30px; 
  height: 30px; 
  border-radius: 50%;
  background-color: #e39207;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 1.4em;
  color: #fff;
  margin-right: 10px;

`;

const StyledText = styled.p`
  font-size: 1.6em;
  font-weight: 400;
`;

const StyledIcon = styled.img`
  margin-right: 10px;
  width: 26px;
  padding: 0 2px;
`;

const StyledH3 = styled.h3`
  position: relative;
  font-weight: 700;
  font-size: 1.6em;
  top: 2px;
`;

export default HowItWorks