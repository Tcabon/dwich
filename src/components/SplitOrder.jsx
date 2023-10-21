import React, {useState} from "react";
import styled from "styled-components";
import useCart from '../hooks/useCart';
import useStateStorageWithDefault from "../hooks/useStateStorageWithDefault";
import { useForm } from "react-hook-form";
import AddGuestsToOrder from "./AddGuestsToOrder";
import ModalToaster from "./ModalToaster";
import AssignMealsToGuests from "./AssignMealsToGuests";

const SplitOrder = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cartEntries, total } = useCart();
  const [assignedCartEntries, setAssignedCartEntries] = useStateStorageWithDefault('sessionAssignedCartEntries', cartEntries);
  
  return (
    <StyledSplitOrder>
      <button onClick={() => setIsModalOpen(true)}>Ajouter Convives</button>
      <ModalToaster title='Ajouter Convives' content={AddGuestsToOrder} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <AssignMealsToGuests assignedCartEntries={assignedCartEntries} setAssignedCartEntries={setAssignedCartEntries} />
      
    </StyledSplitOrder>
  )
};

const StyledSplitOrder = styled.div`

`

export default SplitOrder;

/*=========
      =========
      CONVIVES
        ajouter convive
          champ email,
          champ nom,
        Liste CONVIVES
          afficher convives
            afficher panier convive
              supprimer contenu panier convive
            Supprimer convive
      LISTE PLATS
        Afficher plat
          bouton ajouter plat convive
      CONFIRMER COMMANDE*/