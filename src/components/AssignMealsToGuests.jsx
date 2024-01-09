import React, {useState} from "react";
import styled from "styled-components";
import ModalToaster from "./ModalToaster";
import AssignMealsToGuestsForm from "./AssignMealsToGuestsForm";
import useLunch from "../hooks/useLunch";

const AssignMealsToGuests = ({assignedCartEntries, setAssignedCartEntries}) => {
  const [selectedCartEntryIds, setSelectedCartEntryIds] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {guestsList, setGuestsList} = useLunch();

  const removeCartEntryFromGuest = (userId, assignedCartEntryId) => {
    console.log(assignedCartEntryId);
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
    console.log(updatedGuests);
    return updatedGuests;
  };

  const handleRemoveCartEntryFromGuest = (entry, userId) => {
    setAssignedCartEntries(() => [...assignedCartEntries, entry]);
    setGuestsList(() => removeCartEntryFromGuest(userId, entry.cartEntryId))
  };

  const handleCheckboxChange = (entryId) => {
    // Check if the entryId is already in the selectedCartEntryIds array
    if (selectedCartEntryIds.includes(entryId)) {
      // If it's already selected, remove it
      setSelectedCartEntryIds((prevSelected) =>
        prevSelected.filter((id) => id !== entryId)
      );
    } else {
      // If it's not selected, add it
      setSelectedCartEntryIds((prevSelected) => [...prevSelected, entryId]);
    }
  };

  const sortedData = assignedCartEntries.sort((a, b) => {
    const nameA = a.name.toLowerCase(); // Convert names to lowercase for case-insensitive sorting
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
    <StyledAssignMealsToGuests>
      {sortedData.map((entry, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={selectedCartEntryIds.includes(entry.cartEntryId)}
            onChange={() => handleCheckboxChange(entry.cartEntryId)}
          />
          {entry.name}
        </div>
      )
    )}
    {assignedCartEntries && assignedCartEntries != 0 && (
      <button onClick={() => setIsModalOpen(true)}>Assigner Plats</button>
    )}
    {guestsList.map((guest, guestIndex) => (
      <div key={guestIndex}>
        <div>
          {guest.name}
        </div>
        <div>
          {guest.assignedCartEntries.map((entry, entryIndex) => (
            <div key={entryIndex}>
              {entry.name}
              { entry.price}
              <div onClick={() => handleRemoveCartEntryFromGuest(entry, guest.userId)}>
                X
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
    <ModalToaster
      title='Assigner plats'
      content={AssignMealsToGuestsForm}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      assignedCartEntries={assignedCartEntries}
      setAssignedCartEntries={setAssignedCartEntries}
      selectedCartEntryIds={selectedCartEntryIds}
      setSelectedCartEntryIds={setSelectedCartEntryIds}
    />
    </StyledAssignMealsToGuests>
  )
};

const StyledAssignMealsToGuests = styled.div`

`;

export default AssignMealsToGuests;