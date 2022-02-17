import React from "react";
import { FaJs, FaNodeJs, FaReact, FaWordpress } from "react-icons/fa";
import { SiMongodb, SiTypescript } from "react-icons/si";
import profile from "../../assets/images/photo-profile.jpg";
import { Section, Container, Content } from "./styleAbout";

export const About = () => {
  return (
    <Section id="Sobre">
      <Container className="animate__animated animate__fadeIn">
        <h2 className="heading">Sobre mim</h2>
        <Content>
          <div className="description">
            <h3>John Maicon</h3>

            <p>
              Programador e desenvolvedor há quase 2 anos atuando diretamente no
              mercado. Iniciei a carreira em 2019 quando descobri meu maior
              vício: códigos. Meu primeiro emprego foi em uma fabrica de
              software, que me proporcionou a primeira experiência e entrada no
              mercado, a partir daí comecei a desenvolver projetos pessoais das
              mais diversas formas, Websites, Aplicativos, Sistemas, adquirindo
              conhecimentos de programação, hoje utilizados no mercado.
            </p>

            <p>UI/UX</p>
            <p>Front-end</p>
            <p>Back-end</p>

            <div className="skills-icons">
              <div>
                <FaJs />
              </div>
              <div>
                <FaReact />
              </div>
              <div>
                <SiTypescript />
              </div>
              <div>
                <FaNodeJs />
              </div>
              <div>
                <SiMongodb />
              </div>
              <div>
                <FaWordpress />
              </div>
            </div>
          </div>

          <div className="image">
            <img src={profile} alt="" srcSet="" />
          </div>
        </Content>
      </Container>
    </Section>
  );
};
