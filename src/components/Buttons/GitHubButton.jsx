import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const GithubButton = ({ directory }) => {
  let baseUrl = `https://github.com/devjohnmaicon/${directory}`;

  return (
    <Button href={baseUrl} target="_blank">
      <FaGithub size={"1.5rem"} /> Github
    </Button>
  );
};

const Button = styled.a`
  /* From cssbuttons.io by @gksckt */
  background-color: #444141;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  padding: 0.6rem;
  font-weight: bold;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 1rem;

  :hover {
    background-image: linear-gradient(
      90deg,
      #53cbef 0%,
      #dcc66c 50%,
      #ffa3b6 75%,
      #53cbef 100%
    );
    animation: slidernbw 5s linear infinite;
    color: #000;
  }

  @keyframes slidernbw {
    to {
      background-position: 20vw;
    }
  }
`;
