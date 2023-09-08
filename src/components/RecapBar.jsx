import React from "react";
import styled from "styled-components";
import useUserDataReservation from '../hooks/useUserDataReservation';

const RecapBar = () => {
    const { date, isSelected, setIsSelected } = useUserDataReservation();

    return (
        {isSelected} && (
            <StyledRecapBar>
                --{isSelected}--
                <p>Date sélectionnée : {date.toDateString()}</p>
                <button onClick={() => setIsSelected(false)}>changer</button>
            </StyledRecapBar>
        )
    )
};

const StyledRecapBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background-color: #FFF;
    border-radius: 10px 10px 0 0;
    padding: 0 20px 0 20px;
    box-shadow: 0px 5px 25px 10px rgba( 0, 0, 0, 0.1);
    position: fixed;
    bottom: 0;
    left: 0;
    width: calc(100% - 40px);
    z-index: 100;
    font-size: 1rem;
    color: #1A4133;
    background-color: #FFF;
`;

export default RecapBar;
