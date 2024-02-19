import styled from "styled-components"

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
      </StyledOl>
      <StyledLastPart>
        <StyledIcone>
          &#9996;
        </StyledIcone>
        <StyledH3>Mangez en toute tranquilité</StyledH3>
      </StyledLastPart>
    </StyledHowItWorksWrapper>
  )
}

const StyledHowItWorksWrapper = styled.div`
  background-color: #fff;
  padding: 10px 0px 10px 0px;
  border-radius: 10px;
`;

const StyledOl = styled.ol`
  padding-left: 20px;
  list-style-type: none;
`;

const StyledLi = styled.li`
  display: flex;
  position: relative;
  padding: 5px;
`;

const StyledCircle = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 16px; /* Ajustez la taille du cercle selon vos besoins */
  height: 16px; /* Ajustez la taille du cercle selon vos besoins */
  border-radius: 50%;
  background-color: #e39207; /* Utilisez la couleur spécifiée */
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #fff; /* Couleur du texte à l'intérieur du cercle */
  margin-right: 10px; /* Espace entre le cercle et le texte de la liste */
`;

const StyledText = styled.p`
  padding-left: 17px;
`;

const StyledIcone = styled.div`
  margin-right: 10px;
`;

const StyledLastPart = styled.div`
  display: flex; /* Ajout de l'affichage flex */
  align-items: center; /* Ajout de l'alignement vertical */
  padding: 5px 0 0 23px;

`;

const StyledH3 = styled.h3`
  font-weight: 600;
`;

export default HowItWorks