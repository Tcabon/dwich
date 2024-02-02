import styled from "styled-components"

const HowItWorks = () => {
  return (
    <StyledHowItWorksWrapper>
      <StyledOl>
        <StyledLi>
          <StyledCircle>1</StyledCircle>
          Sélectionnez un restaurant
        </StyledLi>
        <StyledLi>
          <StyledCircle>2</StyledCircle>
          Choisissez vos plats
        </StyledLi>
        <StyledLi>
          <StyledCircle>3</StyledCircle>
          Invitez vos amis
        </StyledLi>
        <StyledLi>
          <StyledCircle>4</StyledCircle>
          Attribuez les plats
        </StyledLi>
      </StyledOl>
      <h3>Mangez en toute tranquilité</h3>
    </StyledHowItWorksWrapper>
  )
}

const StyledHowItWorksWrapper = styled.div`
  background-color: #fff;
  padding: 10px 0px 10px 0px;
  border-radius: 10px;
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

const StyledOl = styled.ol`
  padding-left: 20px;
  list-style-type: none;
`;

const StyledLi = styled.li`
  position: relative;
  padding-left: 20px;
  padding: 5px;
  list-style: none;
`;

export default HowItWorks