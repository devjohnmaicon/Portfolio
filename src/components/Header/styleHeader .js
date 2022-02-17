import styled from "styled-components";

export const HeaderComponent = styled.header`
  height: ${(props) => (props.scroll > 0 ? "5rem" : "6rem")};

  background-color: ${(props) =>
    props.scroll > 0 ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0.2)"};

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.2s ease-out;
  .container {
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    .logo {
      font-size: 2rem;
      font-weight: bold;
    }

    button {
      background-color: transparent;
      font-size: 2rem;
      font-weight: 700;
    }

    @media screen and (min-width: 768px) {
      button {
        display: none;
      }
    }
  }
`;

export const Nav = styled.nav`
  /* mobile */
  display: ${(props) => (props.showMenu ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 5rem;
  left: 0;
  right: 0;
  padding: 1rem;

  transition: all 0.2s ease-in-out;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;

    li {
      padding: 1rem;
      text-align: center;

      a {
        font-size: 1.2rem;
        color: #fff;
        font-weight: bolder;
        letter-spacing: 2px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    /* tablet / desktop */
    background-color: transparent;
    display: flex;
    flex-direction: row;

    position: relative;
    top: 0;

    ul {
      flex-direction: row;

      li {
        padding: 0.4rem;

        a {
          font-size: 1.1rem;
          :active,
          :hover {
            color: #0dcaf0;
          }
        }
      }
    }
  }
`;
