import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  background-color: #060606;

  position: relative;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const Container = styled.div`
  width: 1024px;

  .heading {
    font-size: 2rem;
    padding: 1rem;

    ::after {
      content: "";
      background-color: #0dcaf0;
      height: 0.5rem;
      width: 12%;
      margin-top: 0.5rem;
      display: block;
    }
  }

  .filter {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;

    margin: 1.4rem 0;

    button {
      background-color: transparent;
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 2px;
      padding: 0.2rem;
      cursor: pointer;

      :focus,
      :active {
        color: #0dcaf0;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    .heading {
      font-size: 2rem;
      padding: 0;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 1.5rem;

  .box {
    height: 15rem;
    overflow: hidden;
    position: relative;
    border-radius: 5px;

    transition: 0.2s ease;

    cursor: pointer;

    img {
      height: 100%;
      width: 100%;
      object-fit: fill;
    }

    :hover {
      transform: scale(1.1);
    }
  }

  @media screen and (min-width: 768px) {
    height: auto;
  }

  @media screen and (max-width: 1024px) {
    padding: 1rem;
  }
`;
