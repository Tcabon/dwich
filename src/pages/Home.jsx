import React from "react";
import styled from "styled-components";
import HostUserForm from "../components/home/HostUserForm";

const Home = () => {

  return (
    <StyledHomeWrapper>
      <h1>Bienvenue chez Dwich</h1>
      <HostUserForm />
    </StyledHomeWrapper>
  );
}

const StyledHomeWrapper = styled.div`
  
`;

export default Home;
