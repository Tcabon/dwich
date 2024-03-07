import React, {useState} from "react";
import styled from "styled-components";
import useLunch from "../../hooks/useLunch";

const AssignMealsToGuestsForm = (props) => {
  const { 
    assignedCartEntries,
    selectedCartEntryIds,
    setIsModalOpen,
    setSelectedCartEntryIds,
  } = props;
  const [selectedOption, setSelectedOption] = useState();
  const {guestsList, setGuestsList} = useLunch();

  const findObjectsWithMatchingIds = () => {
    return assignedCartEntries.filter((obj1) =>
      selectedCartEntryIds.includes(obj1.cartEntryId)
    );
  };

  const findObjectsWithoutMatchingIds = () => {
    return assignedCartEntries.filter((obj1) =>
      !selectedCartEntryIds.includes(obj1.cartEntryId)
    );
  };

  const updateAssignedValue = () => {
    return guestsList.map((object) => {
      if (object.userId === selectedOption) {
        return { ...object, assignedCartEntries: [...findObjectsWithMatchingIds(), ...object.assignedCartEntries] };
      }
      return object;
    });
  };

  const handleAddCartEntriesToUser = () => {
    setGuestsList(() => updateAssignedValue());
    setSelectedCartEntryIds(() => []);
    setIsModalOpen(() => false);
  };

  return (
    <StyledAssignMealsToGuestsForm>
      <form>
      {guestsList.map((guest, index) => (
        <div key={index}>
          <input
            type="radio"
            name="options"
            checked={selectedOption === guest.userId}
            onChange={() => setSelectedOption(guest.userId)}
          />
          {guest.name}
        </div>
      ))}
      </form>
      <button onClick={() => handleAddCartEntriesToUser()}>
        Confirmer l'assignation de plats
      </button>
    </StyledAssignMealsToGuestsForm>
  )
}

const StyledAssignMealsToGuestsForm = styled.div`

`;

export default AssignMealsToGuestsForm;