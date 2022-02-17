import React from "react";
import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components";

export const ScrollingTopButton = () => {
  return (
    <Button href="#Home">
      <FaArrowUp size={"1.2rem"} />
    </Button>
  );
};

const Button = styled.a`
  background: #0dcaf0;
  box-shadow: 3px 5px 15px 5px #000000;
  font-family: sans-serif;
  font-size: 1rem;
  color: #fff;
  border-radius: 4px;
  transition-duration: 0.2s;
  padding: 1rem 0.8rem;

  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 5;
  margin-bottom: 1rem;
  margin-right: 0.5rem;

  cursor: pointer;

  transition: 0.2s ease-in-out;
  animation: movimentation 2s cubic-bezier(0.19, 1, 0.22, 1) infinite alternate
    both;

  @keyframes movimentation {
    0% {
      transform: translateZ(50px) translateY(-25px);
      box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35);
    }
    100% {
      transform: translateZ(0) translateY(0);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
`;
