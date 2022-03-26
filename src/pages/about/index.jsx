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
              Desenvolvedor de aplicações web há quase 2 anos. Iniciei minha
              carreira em 2019 quando descobri o mundo da programação. A
              primeira experiência com programação, foi quando desenvolvi uma
              mini aplicação TODO LIST, que utilizei para organizar meus
              estudos. Com isso ingressei na faculdade e assim consegui minha
              primeira vaga de desenvoledor, como estagiário em uma
              multinacional a <cite> Stefanini Solutions</cite>, que me
              proporcionou minha primeira experiência profissional. A partir daí
              comecei a desenvolver Websites e Aplicações Web, adquirindo
              conhecimentos de programação, hoje utilizados para atuar como
              desenvolvedor freelancer.
            </p>
            {/* <p>UI/UX</p> */}
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
