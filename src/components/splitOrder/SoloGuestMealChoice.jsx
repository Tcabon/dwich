import react, { useEffect, useState } from "react";
import styled from "styled-components";
import useLunch from "../../hooks/useLunch";
import chevronUpIcon from '@/assets/icons/chevronUpIcon.png';
import crossIcon from '@/assets/icons/crossIcon.png';


const SoloGuestMealChoice = ({guest, assignedCartEntries}) => {
  const [expanded, setExpanded] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { guestsList, setGuestsList, selectGuestInSplitOrder } = useLunch();
  const totalPanierSolo = guest.assignedCartEntries.reduce((total, entry) => total + entry.price, 0);
  
  console.log(guest);
  
  const transformCartEntries = () => {
    return (guest.assignedCartEntries.reduce((acc, entry) => {
      const existingEntryIndex = acc.findIndex(item => item.name === entry.name);
      if (existingEntryIndex !== -1) {
        acc[existingEntryIndex].quantity++;
        acc[existingEntryIndex].total += entry.price;
        acc[existingEntryIndex].entries.push(entry);
      } else {
        acc.push({
          entries: [entry],
         name: entry.name,
          price: entry.price,
          quantity: 1,
          total: entry.price
        });
    }
    return acc;
  }, []))};

  const [transformedCartEntries, setTransformedCartEntries] = useState(transformCartEntries());
  
  useEffect (() => {
    setTransformedCartEntries(transformCartEntries());
  }, [assignedCartEntries])

  const removeCartEntryFromGuest = (userId, assignedCartEntryId) => {
    const updatedGuests = guestsList.map((guest) =>
      guest.userId === userId
        ? {
            ...guest,
            assignedCartEntries: guest.assignedCartEntries.filter(
              (entry) => entry.cartEntryId !== assignedCartEntryId
            ),
          }
        : guest
    );
    return updatedGuests;
  };

  const handleRemoveCartEntryFromGuest = (entry, userId) => {
    setGuestsList(() => removeCartEntryFromGuest(userId, entry.entries[0].cartEntryId));
  };

  const handleClick = () => {
    selectGuestInSplitOrder(guest.userId)
  }

  return (
    <StyledContentWrapper>
      <StyledTopContent onClick={handleClick} $clicked={guest.isSelected}>
        <StyledName>{guest.name}</StyledName>
        <StyledTotalPanierSolo>{totalPanierSolo} €</StyledTotalPanierSolo>
        {transformedCartEntries.length > 0 && (
          <StyledButtonContainer>
            <StyledPreviousButton onClick={() => setExpanded(!expanded)}><StyledChevronIcon src={chevronUpIcon} $expanded={expanded}/></StyledPreviousButton>
          </StyledButtonContainer>
        )}
      </StyledTopContent>
      {expanded && (
        <StyledInfos>
          {transformedCartEntries.map((entry, index) => (
            <StyledEntry key={index}>
              <StyledQuantity>{entry.quantity}x</StyledQuantity>
              <StyledItemName>{entry.name}</StyledItemName>
              <StyledItemPrice>{entry.price} €</StyledItemPrice>
              <StyledEntryTotal>{entry.total} €</StyledEntryTotal>
              <StyledButton onClick={() => handleRemoveCartEntryFromGuest(entry, guest.userId)}><StyledCrossIcon src={crossIcon}/></StyledButton>
            </StyledEntry>
          ))}
        </StyledInfos>
      )}
    </StyledContentWrapper>
  )
};

const StyledContentWrapper = styled.div`
  min-height: 64px;
  width: 100%;
  background-color: #fff;
  margin: 0 0 16px 0;
  border-radius: 8px;
  align-items: center;
  
`;

const StyledTopContent = styled.div`
  display: flex;
  height: 32px;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border: ${props => props.$clicked ? 'solid 1.5px orange' : 'none'};
  border-radius: 8px;
`;

const StyledName = styled.p`
  font-size: 1.6em;
  
`;

const StyledTotalPanierSolo = styled.p`
  margin-left: auto;
  font-weight: 600;
  font-size: 1.6em;
`;

const StyledButtonContainer = styled.div`
  width: 24px;
  height: 24px;
`;

const StyledPreviousButton = styled.button`
  line-height: 0;
`;

const StyledChevronIcon = styled.img`
  height: 24px;
  transform: ${props => props.$expanded ? 'rotate(0)' : 'rotate(180deg)'};
`;

const StyledInfos = styled.div`
  background-color: #F2F2F2;
  padding: 16px 16px 8px 16px;
`;

const StyledEntry = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6em;
  margin-bottom: 8px;
`;

const StyledQuantity = styled.p`
  padding-right: 8px;
`;

const StyledItemName = styled.p`
  padding-right: 8px;
`;

const StyledItemPrice = styled.p`

`;

const StyledEntryTotal = styled.p`
  margin-left: auto;
  padding: 0 10px 0 0;
  font-weight: 600;
`;

const StyledButton = styled.button`
  display: flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;

const StyledCrossIcon = styled.img`
  width: 13.5px;
  height: 13.5px;
`;

export default SoloGuestMealChoice;