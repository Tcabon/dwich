import React from "react";
import styled from "styled-components";
import HostUserForm from "../components/home/HostUserForm";
import imageAccueil from "../assets/images/imageAccueil.svg"
import HowItWorks from "../components/home/HowItWorks";
import ContactUsPro from "../components/home/ContactUsPro";

const Home = () => {
  return (
    <StyledHomeWrapper>
      <StyledCenteredImage>
        <StyledImage src={imageAccueil} alt="Image Accueil" />
      </StyledCenteredImage>
      <StyledContentWrapper>
        <Styledh1>Anticipez chaque bouchée</Styledh1>
        <StyledText>Economisez du temps, réservez vos plats à l'avance!</StyledText>
        <HostUserForm />
        <Styledh2>Comment ça marche ?</Styledh2>
        <HowItWorks />
        <Styledh2>Vous êtes restaurateur ?</Styledh2>
        <ContactUsPro />
      </StyledContentWrapper>
    </StyledHomeWrapper>
  );
}

const StyledHomeWrapper = styled.div`
  background-color: #fff62b;
`;

const StyledContentWrapper = styled.div`
  max-width: 800px; /* ou une valeur qui convient à votre mise en page */
  margin: 0 auto; /* Centre le contenu horizontalement */
  padding: 15px;
`;

const StyledCenteredImage = styled.div`
  text-align: center;
`;

const StyledImage = styled.img`
  max-width: 100%; /* Assurez-vous que l'image ne dépasse pas la largeur de son conteneur */
  height: auto;
`;

const Styledh1 = styled.h1`
  font-size: 2.4em;
  font-weight: 600;
  text-align: left;
  line-height: 1.2em;
`;

const Styledh2 = styled.h2`
  font-size: 1.8em;
  font-weight: 600;
  text-align: left;
  margin: 10px 0 10px 0;
`;

const StyledText = styled.p`
  font-size: 1.2em;
  margin: 16px 0px 16px 0px;
  text-align: left;
  line-height: 1.6em;
`;

export default Home;
