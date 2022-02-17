import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1024px;

  h2 {
    font-size: 2rem;
    padding: 1rem 1rem 0 1rem;

    ::after {
      content: "";
      background-color: #0dcaf0;
      height: 0.5rem;
      width: 12%;
      margin-top: 0.5rem;
      display: block;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 1rem;
  }
`;

export const Content = styled.div`
  /* padding: 1rem; */
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .description {
    height: 100%;

    h3 {
      font-size: 2rem;
      padding: 1rem;
    }

    p {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      text-align: justify;
      padding: 0 1rem;
      letter-spacing: 2px;
    }

    .skills-icons {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.8rem;

      margin-top: 1.5rem;
      font-size: 2.5rem;
    }
  }

  .image {
    display: none;
  }

  @media screen and (min-width: 768px) {
    /* background-color: red; */
    flex-direction: row;

    .description {
      height: 50%;
    }

    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;

      img {
        height: 18rem;
        width: 18rem;
        object-fit: fill;
        border-radius: 50%;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .image {
      img {
        height: 20rem;
        width: 20rem;
        object-fit: fill;
        border-radius: 50%;
      }
    }
  }
`;

// export const Section = styled.section``
