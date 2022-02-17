import React from "react";
import styled from "styled-components";

export const LearnMoreButton = () => {
  return (
    <Button>
      <span> Ver mais</span>
    </Button>
  );
};

const Button = styled.button`
  background-color: transparent;
  padding: 0.2rem;
  font-size: 0.8rem;
  transition: 0.2ms ease-out;
  font-weight: bolder;
  cursor: pointer;

  :hover {
    border-bottom: 3px solid #0dcaf0;
  }

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;
