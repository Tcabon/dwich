import React, {useState} from "react";
import styled from "styled-components";
import Button from "@/components/common/Button";
import useLunch from "@/hooks/useLunch";
import SnackBar from "@/components/common/SnackBar";


const AssignMealsToGuests = ({assignedCartEntries}) => {
  const [selectedCartEntryIds, setSelectedCartEntryIds] = useState([]);
  const {assignMealsToGuest} = useLunch();
  const [noMealsSelected, setNoMealsSelected] = useState(null);

  const assignMealDisplay = () => {
    return (
      <div>
        Attribuer 
      </div>
    )
  };

  const handleAssignMealsToGuest = () => {
    if (selectedCartEntryIds.length > 0) {
      assignMealsToGuest(findObjectsWithMatchingIds());
    } else {
      setNoMealsSelected(true);
      setTimeout(() => {
        setNoMealsSelected(false);
      }, 1500);
    }
  };

  const handleCheckboxChange = (entryId) => {
    if (selectedCartEntryIds.includes(entryId)) {
      setSelectedCartEntryIds((prevSelected) =>
        prevSelected.filter((id) => id !== entryId)
      );
    } else {
      setSelectedCartEntryIds((prevSelected) => [...prevSelected, entryId]);
    }
  };

  const findObjectsWithMatchingIds = () => {
    return assignedCartEntries.filter((obj1) =>
      selectedCartEntryIds.includes(obj1.cartEntryId)
    );
  };

  const sortedData = assignedCartEntries.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });


  return (
    <StyledContentWrapper>
      {assignedCartEntries && assignedCartEntries != 0 && (
        <StyledAssignMealTitle>Attribuez les plats</StyledAssignMealTitle>
      )}
      {sortedData.map((entry, index) => (
        <StyledMealEntry key={index} $last={index === sortedData.length - 1}>
          <StyledInput
            type="checkbox"
            checked={selectedCartEntryIds.includes(entry.cartEntryId)}
            onChange={() => handleCheckboxChange(entry.cartEntryId)}
          />
          <StyledEntryQuantity>1x</StyledEntryQuantity>
          <StyledEntryName>{entry.name}</StyledEntryName>
          <StyledEntryPrice>{entry.price} €</StyledEntryPrice>
        </StyledMealEntry>
      )
    )}
    {assignedCartEntries && assignedCartEntries != 0 && (
      <StyledButtonContainer>
        <Button action={() => {handleAssignMealsToGuest()}} Display={assignMealDisplay} status={selectedCartEntryIds.length > 0 ? '' : 'disabled'}/>
      </StyledButtonContainer>
    )}
    {noMealsSelected && 
      <SnackBar message={'Vous n\'avez pas choisis de plats'} />
    }
    </StyledContentWrapper>
  )
};

const StyledContentWrapper = styled.div`
  width: 100%;
`;

const StyledAssignMealTitle = styled.p`
  display: flex;
  height: 36px;
  text-align: left;
  font-size: 2em;
  align-items: center;
  margin-bottom: 24px;
`;

const StyledMealEntry = styled.div`
  background-color: #fff;
  display: flex;
  height: 48px;
  text-align: left;
  border-radius: 5px;
  align-items: center;
  margin: 0 0 ${props => props.last ? '0' : '8px'} 0;
`;

const StyledInput = styled.input`
  width: 20px;
  height: 20px;
  margin: 0 6px 0 20px;
`;

const StyledEntryQuantity = styled.div`
  width: 24px;
  font-size: 1.6em;
`;

const StyledEntryName = styled.p`
  font-size: 1.6em;
  margin-left: 8px;
`;

const StyledEntryPrice = styled.p`
  font-size: 1.6em;
  font-weight: 700;
  margin-left: auto;
  margin-right: 16px;
`;

const StyledButtonContainer = styled.div`
  margin: 16px 0 0 0;
  padding-bottom: 50px;
`;

export default AssignMealsToGuests;