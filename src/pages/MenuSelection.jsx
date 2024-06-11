import React from 'react';
import MenuItem from '../components/menuSelection/MenuItem';
import RecapPlats from '../components/common/RecapPlats';
import useCart from '../hooks/useCart';
import styled from 'styled-components';
import backArrow from '@/assets/icons/backArrow.png';
import useGoBack from '@/hooks/useGoBack';

function MenuSelection() {
  const { addToCart } = useCart();
  const goBack = useGoBack();

  const handlePreviousButtonClick = () => {
    goBack();
  };

  // Simulons des éléments de menu pour la démonstration
  const menuItems = {
    entries: [
      { id: 1, name: 'La burratina', description: 'Burata Crémeuse et son mesclun de salade', price: 10.5 },
      { id: 2, name: 'Oeuf cocotte à la truffe', description: 'Oeuf en cocotte crème de truffe et San Daniel en mouillette', price: 10.5 },
      { id: 3, name: 'Ceviche de poulpe', description: 'Quinoa à la coriandre et tranche de poulpe', price: 10.5 }
    ],
    plats: [
      { id: 4, name: 'Involtini', description: 'Roulé de veau aubergine et mozzarella', price: 10.5 },
      { id: 5, name: 'Pizza Peperoni', description: 'Tomate mozzarella picorions Sardo salami piquant olives et poivrons', price: 10.5 },
      { id: 6, name: 'Lasagne', description: 'Sauce tomate boeuf basilic mozzarella', price: 10 }
    ],
    desserts: [
      { id: 8, name: 'Tiramisu', description: 'Mascarpone, biscuit, café, la vie quoi', price: 8 },
      { id: 9, name: 'Panna Cotta', description: 'Dessert à base de crème et de lait avec coulis de fruits rouges', price: 8 }
    ]
  };

  return (
    <StyledContentWrapper>
      <StyledPageHeader>
        <StyledButtonContainer>
          <StyledPreviousButton onClick={() => handlePreviousButtonClick()}><StyledImage src={backArrow} /></StyledPreviousButton>
        </StyledButtonContainer>
        <StyledTitle>Qu'est ce qu'on mange ?</StyledTitle>
      </StyledPageHeader>
      <StyledDishContainer>
        <StyledH2>Entrée</StyledH2>
        {menuItems.entries.map(item => (
          <MenuItem
            key={item.id}
            item={item}
            addToCart={addToCart}
          />
        ))}
      </StyledDishContainer>
      <StyledDishContainer>
        <StyledH2>Plat</StyledH2>
        {menuItems.plats.map(item => (
          <MenuItem
            key={item.id}
            item={item}
            addToCart={addToCart}
          />
        ))}
      </StyledDishContainer>
      <StyledDishContainer>
      <StyledH2>Dessert</StyledH2>
      {menuItems.desserts.map(item => (
          <MenuItem
            key={item.id}
            item={item}
            addToCart={addToCart}
          />
        ))}
      </StyledDishContainer>
      <RecapPlats />
    </StyledContentWrapper>
  );
}

const StyledContentWrapper = styled.div`
  padding: 14px 16px 55px 16px;
  max-width: 880px;
  margin: 0 auto;
`;

const StyledDishContainer = styled.div`

`;

const StyledPageHeader = styled.div`
  display: flex;
  align-items: center;
  height: 36px;
  margin-bottom: 22px;
`;

const StyledButtonContainer = styled.div`

`;

const StyledPreviousButton = styled.button`
  line-height: 0;
`;

const StyledImage = styled.img`
  height: 30px;
`;

const StyledTitle = styled.h1`
  font-size: 2.2em;
  font-weight: 700;
`;

const StyledH2 = styled.h2`
  text-align: left;
  padding: 0 0 12px 0;
  font-size: 2.4em;
`;

const StyledCart = styled.div`

`;

export default MenuSelection;
