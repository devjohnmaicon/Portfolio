import React, { useState } from "react";

import { Projetos } from "../../assets/utils/projetos";
import { Gallery } from "./gallery/Gallery";
import { Container, Content, Section } from "./stylePortfolio";

export default function Portfolio() {
  const [projects, setProjects] = useState(Projetos);
  const [showGallery, setShowGallery] = useState(false);
  const [imagesSlide, setImagesSlide] = useState([]);

  const handleFilter = (tag) => {
    const projectsFiltered = Projetos.filter((proj) => proj.category === tag);
    tag === "all" ? setProjects(Projetos) : setProjects(projectsFiltered);
  };

  const showProject = (id) => {
    setShowGallery(true);
    Projetos.filter((p) => p.id === id)
      .map((i) => i.images)
      .forEach((element) => setImagesSlide(element));
  };

  return (
    <Section id="Projetos">
      <Container>
        <h2 className="heading">Portfólio</h2>

        <div className="filter">
          <button onClick={() => handleFilter("all")}>Todos</button>
          <button onClick={() => handleFilter("web")}>Sites</button>
          <button onClick={() => handleFilter("wordpress")}>Wordpress</button>
        </div>

        <Content>
          {projects.map((p) => (
            <div key={p.id} className="box " onClick={() => showProject(p.id)}>
              <img
                className="animate__animated animate__fadeInDown"
                src={require(`../../assets/images/${p.img}`)}
                alt=""
              />
            </div>
          ))}
        </Content>
      </Container>

      {showGallery && (
        <Gallery setShowGallery={setShowGallery} imagesSlide={imagesSlide} />
      )}
    </Section>
  );
}
