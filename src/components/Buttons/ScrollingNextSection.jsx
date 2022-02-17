import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import styled from "styled-components";

export const ScrollingNextSection = () => {
  return (
    <Button href="#Sobre">
      <MdArrowBackIosNew size={"2.5rem"} className="btn" />
    </Button>
  );
};

const Button = styled.a`
  position: absolute;
  left: 45%;
  bottom: 1rem;
  background: transparent;
  border-radius: 4px;

  cursor: pointer;

  transition: 0.2s ease-in-out;
  animation: movimentation 2s cubic-bezier(0.19, 1, 0.22, 1) infinite alternate
    both;

  .btn {
    transform: rotate(-90deg);
  }

  @keyframes movimentation {
    0% {
      transform: translateZ(0) translateY(15px);
    }
    100% {
      transform: translateZ(50px) translateY(-25px);
      transform: scale(1.2);
    }
  }

  @media screen and (min-width: 768px) {
    left: 50%;
  }
`;
