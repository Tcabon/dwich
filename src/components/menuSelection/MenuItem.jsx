import React, { useState } from 'react';
import styled from 'styled-components';
import useCart from '../../hooks/useCart';
import plusWhiteSymbol from '@/assets/icons/plusWhiteSymbol.png';
import minusGreySymbol from '@/assets/icons/minusGreySymbol.png';
import plusGreySymbol from '@/assets/icons/plusGreySymbol.png';

const MenuItem = ({ item, addToCart }) => {
  const { id, name, price, description } = item;
  const { removeFromCart, filterItemsCounterByItemId, modifyItemIntoItemsCounter } = useCart();

  const [quantity, setQuantity] = useState(filterItemsCounterByItemId(id));
  const [counterVisible, setCounterVisible] = useState(!!filterItemsCounterByItemId(id));

  const updateQuantity = (quantity) => {
    modifyItemIntoItemsCounter(id, quantity);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      removeFromCart(id);
      updateQuantity(quantity - 1);
    } else if (quantity === 1 ) {
      setQuantity(0);
      setCounterVisible(false);
      removeFromCart(id);
      updateQuantity(0);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
    addToCart(item);
    updateQuantity(quantity + 1);
  };

  const handleNewSelection = () => {
    setCounterVisible(true);
    setQuantity(1);
    addToCart(item);
    updateQuantity(1);
  };

  return (
    <StyledSingleDish>
      <StyledNameAndPrice>
        <StyledName>{name}</StyledName>
        <StyledPrice>{price} €</StyledPrice>
      </StyledNameAndPrice>
      <StyledDescriptionAndCounter>
        <StyledDescription>{description}</StyledDescription>
        <StyledButtonWrapper>
        {counterVisible && (
          <StyledCounterVisible>
            <StyledButton onClick={handleDecreaseQuantity}><StyledImage src={minusGreySymbol} /></StyledButton>
            <StyledQuantity>{quantity}</StyledQuantity>
            <StyledButton onClick={handleIncreaseQuantity}><StyledImage src={plusGreySymbol} /></StyledButton>
          </StyledCounterVisible>
        )}
        {!counterVisible && (
          <StyledButton2 onClick={handleNewSelection}><StyledImage2 src={plusWhiteSymbol} /></StyledButton2>
        )}
        </StyledButtonWrapper>
      </StyledDescriptionAndCounter>
    </StyledSingleDish>
  );
}

const StyledSingleDish = styled.div`
  height: 96px;
  background-color: #FFF;
  margin: 10px 0 16px 0;
  border-radius: 16px;
  text-align: left;
`;

const StyledNameAndPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 16px 0 16px;
`;

const StyledName = styled.h3`
  font-size: 1.6em;
  font-weight: 600;
`;

const StyledPrice = styled.p`
  font-size: 1.2em;
  font-weight: 600;
`;

const StyledDescriptionAndCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 16px 18px 16px;
  flex-shrink: 0;
`;

const StyledDescription = styled.p`
  font-size: 1.2em;
  padding-right: 15px;
  line-height: 16px;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 71px;
  flex-grow: 0;
  flex-shrink: 0;
`;

const StyledCounterVisible = styled.div`
  height: 40px;
  width: 71px;
  display: flex;
  align-items: center;
  border: solid 1px #929292;
  border-radius: 4px;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  border: none;
  background: transparent;
`;

const StyledButton2 = styled.button`
  width: 42px;
  height: 42px;
  background-color: #e39207;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 16px;
  height: 16px;
  padding: 0 4px;
  opacity: 0.7;
`;

const StyledImage2 = styled.img`
  width: 24px;
  height: 24px;
`;

const StyledQuantity= styled.span`
  font-size: 2em;
  font-weight: 700;
  line-height: 24px;
`;

export default MenuItem;