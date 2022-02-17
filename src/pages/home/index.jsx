import React from "react";
import { ScrollingNextSection } from "../../components/Buttons/ScrollingNextSection";
import { Content, Section } from "./styleHome";

export const Home = () => {
  return (
    <Section id="Home" ClassName="parallax">
      <Content className="animate__animated animate__bounceInLeft">
        <span className="apresentation">Olá, eu sou o</span>
        <h3>JOHN MAICON.</h3>
        <p >Estudante de programação</p>
        <p >Desenvolvedor de aplicativos</p> 
        <p >Programador JAVASCRIPT</p>
      </Content>

      <ScrollingNextSection />
    </Section>
  );
};
