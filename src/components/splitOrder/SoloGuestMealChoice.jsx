import react, { useEffect, useState } from "react";
import styled from "styled-components";
import useLunch from "../../hooks/useLunch";


const SoloGuestMealChoice = ({guest, assignedCartEntries}) => {
  const [expanded, setExpanded] = useState(false);
  const { guestsList, setGuestsList } = useLunch();
  const totalPanierSolo = guest.assignedCartEntries.reduce((total, entry) => total + entry.price, 0);

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

  return (
    <StyledContentWrapper >
      <StyledTopContent>
        <StyledName>{guest.name}</StyledName>
        <StyledTotalPanierSolo>{totalPanierSolo} €</StyledTotalPanierSolo>
        {transformedCartEntries.length > 0 && (
          <StyledToggleArrow onClick={() => setExpanded(!expanded)} $expanded={expanded}>&#8679;</StyledToggleArrow>
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
              <StyledButton onClick={() => handleRemoveCartEntryFromGuest(entry, guest.userId)}>O</StyledButton>
            </StyledEntry>
          ))}
        </StyledInfos>
      )}
    </StyledContentWrapper>
  )
};

const StyledContentWrapper = styled.div`
  background-color: #fff;
  margin: 0 20px 10px; 20px;
  border-radius: 5px;
`;

const StyledTopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const StyledName = styled.p`
  padding: 0 0 0 20px;
  font-size: 1.4em;
`;

const StyledTotalPanierSolo = styled.p`
  margin-left: auto;
  padding: 0 10px 0 0;
  font-weight: 600;
  font-size: 1.6em;
`;

const StyledToggleArrow = styled.span`
  cursor: pointer;
  font-size: 1.5rem;
  transition: transform 0.3s;
  transform: ${props => props.$expanded ? 'rotate(0)' : 'rotate(180deg)'};
  color: black;
  padding: 0 10px 0 0;
`;

const StyledInfos = styled.div`
  background-color: #F2F2F2;
`;

const StyledEntry = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px 0 20px;
  padding: 5px 0;
  font-size: 1.3em;
`;

const StyledQuantity = styled.p`

`;

const StyledItemName = styled.p`
  padding: 0 5px;
`;

const StyledItemPrice = styled.p`

`;

const StyledEntryTotal = styled.p`
  margin-left: auto;
  padding: 0 10px 0 0;
  font-weight: 600;
`;

const StyledButton = styled.button`
  border: none;
  background: transparent;
  font-size: 1.2em;
`;

export default SoloGuestMealChoice;