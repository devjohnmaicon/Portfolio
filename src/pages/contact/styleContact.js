import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 1024px;

  @media screen and (min-width: 768px) {
    /* height: 100vh; */
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.4rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 1rem;
  }
`;

// export const Content = styled.div``;

export const Box = styled.div`
  background-color: #0f0f0f;
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  padding: 1rem;
  gap: 1rem;

  .infos {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    p {
      font-weight: 600;
      font-size: 1.2rem;
      text-align: justify;
      margin-bottom: 1rem;
    }

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 600;
      margin: 0.6rem 0;
      border-bottom: 2px solid #0dcaf0;
      padding-bottom: 0.5rem;
    }
  }

  .social-medias {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-size: 2rem;

    a {
      margin-top: 2rem;
      position: relative;
      cursor: pointer;

      :hover {
        ::after {
          content: "";
          height: 0.2rem;
          background-color: #0dcaf0;
          display: block;
          position: absolute;
          bottom: 0;
          right: 0;
          left: 0;
        }
      }
    }
  }

  @media screen and (min-width: 480px) {
    justify-content: center;
    align-items: center;

    .infos {
      width: 95%;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .infos {
      width: 45%;
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 2rem 1.5rem;
    justify-content: space-evenly;

    .infos {
      h2 {
        font-size: 2.5rem;

        margin-bottom: 4rem;
      }
    }
  }
`;

export const FormContainer = styled.div`
  position: relative;
  display: flex;

  form {
    background-color: #fff;
    padding: 1rem;
    color: #212121;
    font-weight: 600;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .box-input {
      padding: 0.2rem 0;
      font-weight: 600;
      letter-spacing: 1px;

      label {
        color: #000;
      }

      input {
        border: 2px solid #929aab;
        border-radius: 5px;
        height: 2.5rem;
        width: 100%;
        padding-left: 0.6rem;
        color: #000;
      }

      textarea {
        width: 100%;
        height: 10rem;
        padding: 0.8rem;
        font-size: 1rem;
        color: #000;
        border-radius: 10px;
        background-color: #d3d6db;
        margin-top: 0.4rem;
        resize: none;
      }

      @media screen and (min-width: 1024px) {
        .box-input {
          textarea {
            height: 10rem;
          }
        }
      }
    }

    .box-button {
      button {
        margin: 0 auto;
      }
    }
  }
`;
