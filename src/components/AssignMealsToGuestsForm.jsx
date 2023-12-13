import React, {useState} from "react";
import styled from "styled-components";
import useLunch from "../hooks/useLunch";

const AssignMealsToGuestsForm = (props) => {
  const { 
    assignedCartEntries,
    setAssignedCartEntries,
    selectedCartEntryIds,
    setIsModalOpen,
    setSelectedCartEntryIds,
  } = props;
  console.log(props);
  const [selectedOption, setSelectedOption] = useState();
  const {guestsList, setGuestsList} = useLunch();

  const findObjectsWithMatchingIds = () => {
    // Find objects from array1 with IDs that match any ID in array2
    return assignedCartEntries.filter((obj1) =>
      selectedCartEntryIds.includes(obj1.cartEntryId)
    );
  };

  const findObjectsWithoutMatchingIds = () => {
    // Find objects from array1 with IDs that match any ID in array2
    return assignedCartEntries.filter((obj1) =>
      !selectedCartEntryIds.includes(obj1.cartEntryId)
    );
  };

  const updateAssignedValue = () => {
    return guestsList.map((object) => {
      // If the object has the specified userId, update its assignedValue
      if (object.userId === selectedOption) {
        return { ...object, assignedCartEntries: [...findObjectsWithMatchingIds(), ...object.assignedCartEntries] };
      }
      // Otherwise, return the object as is
      return object;
    });
  };

  const handleAddCartEntriesToUser = () => {
    setGuestsList(() => updateAssignedValue());
    setAssignedCartEntries(() => findObjectsWithoutMatchingIds());
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
            feu
      </button>
    
    </StyledAssignMealsToGuestsForm>
  )
}

const StyledAssignMealsToGuestsForm = styled.div`

`;

export default AssignMealsToGuestsForm;