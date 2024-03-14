import React from 'react';
import styled from 'styled-components';
import dwichHeader from '../../assets/images/logoDwich.svg'
import twitterHeader from '../../assets/images/twitterHeader.svg'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <StyledHeader>
      <StyledDwichLogoHeader src={dwichHeader} alt="Logo Dwich" />
      <StyledWhiteCircle>
        <Link to="https://twitter.com/home">
          <StyledTwitterHeader src={twitterHeader} alt="Logo Twitter" />
        </Link>
      </StyledWhiteCircle>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  width: calc(100% - 30px);
  padding: 8px 16px 16px 16px;;
  z-index: 1000;
  height: 36px;
  justify-content: space-between;
  align-items: center;
`;

const StyledDwichLogoHeader = styled.img`
  width: 70px;
  height: 21px;
`
const StyledTwitterHeader = styled.img`
  width: 20px;
  height: 20px;
`
const StyledWhiteCircle = styled.div`
  display: flex;
  width: 36px;
  height: 36px;
  background-color: #FFF;
  border-radius: 50px;
  justify-content: center; /* Centre horizontalement */
  align-items: center; /* Centre verticalement */
`;

export default Header;