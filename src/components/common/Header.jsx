import React from 'react';
import styled from 'styled-components';
import dwichHeader from '../../assets/images/logoDwich.svg'
import twitterHeader from '../../assets/images/twitterHeader.svg'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <StyledHeader>
      <StyledDwichLogoHeader src={dwichHeader} alt="Logo Dwich" />
      <Link to="https://twitter.com/home">
        <StyledTwitterHeader src={twitterHeader} alt="Logo Twitter" />
      </Link>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: calc(100% - 30px);
  padding: 15px;
  z-index: 1000;
  height: 20px;
  display: flex;
  justify-content: space-between;
`;

const StyledDwichLogoHeader = styled.img`

`
const StyledTwitterHeader = styled.img`

`


export default Header;