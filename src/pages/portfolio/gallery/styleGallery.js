import styled from "styled-components";

export const GalleryComponent = styled.div`
  background-color: #000;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  /* background-color: red; */
  height: 60vh;
  width: 90%;
  display: flex;
  justify-content: center;
  position: relative;

  transition: all 0.3s ease;

  .close {
    button {
      background-color: rgba(0, 0, 0, 0.4);
      position: absolute;
      right: 0;
      padding: 0.2rem;
      cursor: pointer;

      :hover {
        transform: scale(1.1);
      }
    }
  }

  .arrow-left {
    position: absolute;
    top: 47%;
    left: 0;
    z-index: 2;
    background-color: transparent;
    cursor: pointer;
    filter: opacity(0.5);

    :hover {
      transform: scale(1.2);
      filter: opacity(1);
    }
  }

  .arrow-right {
    position: absolute;
    top: 47%;
    right: 0;
    z-index: 2;
    background-color: transparent;
    filter: opacity(0.5);

    cursor: pointer;

    :hover {
      transform: scale(1.2);
      filter: opacity(1);
    }
  }
  @media screen and (min-width: 768px) {
    height: 80vh;
    width: 80%;
  }

  @media screen and (min-width: 1024px) {
    height: 80vh;
    width: 70%;
  }
`;

export const ImageContainer = styled.div`
  background-color: pink;
  width: 90%;
  width: 100%;
  display: flex;
  overflow: hidden;
  position: relative;

  img {
    height: 100%;
    width: 100%;
    object-fit: fill;
    border-radius: 5px;
  }
`;
