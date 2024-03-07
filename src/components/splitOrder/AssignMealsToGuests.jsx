import React, {useState} from "react";
import styled from "styled-components";
import ModalToaster from "../common/ModalToaster";
import AssignMealsToGuestsForm from "./AssignMealsToGuestsForm";
import Button from "../common/Button";

const AssignMealsToGuests = ({assignedCartEntries}) => {
  const [selectedCartEntryIds, setSelectedCartEntryIds] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const assignMealDisplay = () => {
    return (
      <div>
        Attribuer 
      </div>
    )
  }

  const handleCheckboxChange = (entryId) => {
    if (selectedCartEntryIds.includes(entryId)) {
      setSelectedCartEntryIds((prevSelected) =>
        prevSelected.filter((id) => id !== entryId)
      );
    } else {
      setSelectedCartEntryIds((prevSelected) => [...prevSelected, entryId]);
    }
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
      <StyledAssignMealTitle>Attribuez les plats</StyledAssignMealTitle>
      {sortedData.map((entry, index) => (
        <StyledMealEntry key={index}>
          <StyledInput
            type="checkbox"
            checked={selectedCartEntryIds.includes(entry.cartEntryId)}
            onChange={() => handleCheckboxChange(entry.cartEntryId)}
          />
          <StyledEntryName>1x {entry.name}</StyledEntryName>
          <StyledEntryPrice>{entry.price} €</StyledEntryPrice>
        </StyledMealEntry>
      )
    )}
    {assignedCartEntries && assignedCartEntries != 0 && (
      <StyledButtonContainer>
        <Button action={() => setIsModalOpen(true)} Display={assignMealDisplay} />
      </StyledButtonContainer>
    )}
    <ModalToaster
      title='Assigner plats'
      content={AssignMealsToGuestsForm}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      assignedCartEntries={assignedCartEntries}
      selectedCartEntryIds={selectedCartEntryIds}
      setSelectedCartEntryIds={setSelectedCartEntryIds}
    />
    </StyledContentWrapper>
  )
};

const StyledContentWrapper = styled.div`
  width: 100%;
`;

const StyledAssignMealTitle = styled.p`
  text-align: left;
  margin: 20px 0 15px 20px;
  font-size: 1.6em;
`;

const StyledMealEntry = styled.div`
  background-color: #fff;
  margin: 5px 20px;
  display: flex;
  text-align: left;
  border-radius: 5px;
  align-items: center;
  padding: 8px 0;
`;

const StyledInput = styled.input`
  width: 20px;
  height: 20px;
  margin-left: 20px;
  /* Cache la case à cocher par défaut */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  /* Style la nouvelle case à cocher */
  &:checked {
    background-color: orange; /* Couleur de fond orange lorsque la case est cochée */
  }
  /* Style le faux élément qui remplacera la case à cocher */
  &:before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid orange; /* Bordure orange */
    border-radius: 3px; /* Bordure arrondie */
    position: relative;
    top: 3px;
    left: -2px;
  }
  /* Style le signe de validation de la case à cocher */
  &:checked:after {
    content: "\\2714"; /* Code Unicode du signe de validation */
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    color: white; /* Couleur blanche du signe de validation */
    position: relative;
    top: -19px;
    left: 2px;
`;

const StyledEntryName = styled.p`
  font-size: 1.3em;
  margin-left: 10px;
`;

const StyledEntryPrice = styled.p`
  font-size: 1.3em;
  font-weight: 600;
  margin-left: auto;
  margin-right: 20px;
`;

const StyledButtonContainer = styled.div`
  margin: 0 20px;
`;

export default AssignMealsToGuests;