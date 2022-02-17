import React from "react";
import styled from "styled-components";

export const PopupMessage = ({ response, closeModal }) => {
  return (
    <PopUp>
      <div className="box animate__animated animate__pulse">
        <div className="box-inner">
          <div className="content">
            <h3>{response.message}</h3>
            <button onClick={() => closeModal()}>Fechar</button>
          </div>
        </div>
      </div>
    </PopUp>
  );
};

const PopUp = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  height: 100%;
  position: absolute;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;

  .box {
    background-color: rgba(0, 0, 0, 0.9);
    height: 80%;
    width: 90%;
    border-radius: 10%;
    border: 2px solid #fff;
    box-shadow: 5px 5px 15px -7px #fff;
  }

  .box-inner {
    background-color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100%;
    width: 100%;

    border-radius: 10%;

    transform: rotate(-5deg);
  }

  .content {
    display: flex;
    gap: 1rem;
    align-items: center;

    flex-direction: column;
    transform: rotate(5deg);

    h3 {
      color: #000;
      margin-bottom: 2rem;
      font-size: 1.4rem;
      padding: 0 2rem;
      text-align: center;
    }

    button {
      background-color: #000;
      width: 50%;
      padding: 1rem 1.5rem;
      border-radius: 15px;
      font-size: 1.2rem;
      font-weight: bold;
      letter-spacing: 2px;
      cursor: pointer;
    }
  }
`;
