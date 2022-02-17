import styled from "styled-components";
import bg from "../../assets/images/bg-home.jpg";

export const Section = styled.section`
  height: 100vh;

  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  padding: 0.4rem;

  @media screen and (max-width: 1440px) {
    justify-content: flex-start;
  }
`;

export const Content = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: -5px 4px 15px 5px #000000;

  border-radius: 15px;
  padding: 2rem 1rem;
  margin: 0 auto;

  span {
    font-size: 1.2rem;
  }

  h3 {
    font-size: 2rem;
    font-weight: 800;
  }

  p {
    color: #0dcaf0;
    padding: 0.2rem 0;
  }

  @media screen and (min-width: 768px) {
    margin-left: 4rem;
    padding: 3rem;

    span {
      font-size: 1.4rem;
    }

    h3 {
      font-size: 4rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 1024px) {
    margin-left: 12rem;
    padding:4rem;

    span {
      font-size: 1.6rem;
    }

    h3 {
      font-size: 3.5rem;
    }

    p {
      font-size: 1.8rem;
    }
  }

  @media screen and (min-width: 1440px) {
    margin-left: 15%;
    padding: 5rem;
  }
`;
