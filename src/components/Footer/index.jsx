import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterComponent>
      <span> Desenvolvido por John Maicon - Copyright © </span>
    </FooterComponent>
  );
};

const FooterComponent = styled.div`
  background-color: #060606;
  text-align: center;
  font-size: 1.2rem;
  padding: 2rem;
`;
