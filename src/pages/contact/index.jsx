import React, { useState } from "react";
import { Section, Container, Box, FormContainer } from "./styleContact";

import {
  FaEnvelope,
  FaEnvelopeOpen,
  FaGithub,
  FaInvision,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTelegramPlane,
} from "react-icons/fa";
import { SendMessage } from "../../components/Buttons/SendMessage";
import { PopupMessage } from "./pop-up/PopupMessage";

const staticKey = process.env.REACT_APP_STATICFORMS;

export const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    accessKey: `${staticKey}`,
  });

  const [response, setResponse] = useState({
    type: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: JSON.stringify(contact),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();

      if (json.success) {
        setResponse({
          type: "success",
          message: "Mensagem enviada com sucesso, logo retornarei seu contato!",
        });
        setShowModal(true);
      } else {
        setResponse({
          type: "error",
          message: json.message,
        });
        setShowModal(true);
      }
    } catch (e) {
      console.log("An error occurred", e);
      setResponse({
        type: "error",
        message: "Houve algum erro ao enviar a mensagem.",
      });
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Section id="Contato">
      <Container>
        <Box className="animate__animated animate__fadeIn">
          <div className="infos">
            <h2>Contato</h2>
            <p>
              - Para parcerias, freelas ou propostas de trabalho faço uso dos
              seguintes meios de contato. Caso queira, pode enviar-me um email
              diretamente :]
            </p>

            <span>
              <FaMapMarkerAlt size={"1.5rem"} /> Brasília - DF
            </span>
            <span>
              <FaPhoneAlt size={"1.5rem"} />
              +55 061 98365-4090
            </span>
            <span>
              <FaEnvelope size={"1.5rem"} /> johnmaicon2020@outlook.com
            </span>

            <div className="social-medias">
              <a
                href="https://www.linkedin.com/in/john-maicon-065797212/"
                target="_blank"
                rel=" noopener"
                rel="nofollow"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com/devjohnmaicon"
                target="_blank"
                rel=" noopener"
                rel="nofollow"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <FormContainer>
            <form onSubmit={handleSubmit}>
              <div className="box-input">
                <label htmlFor="">Nome</label>
                <input
                  type="text"
                  name="name"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="box-input">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="box-input">
                <label htmlFor="">Telefone</label>
                <input
                  type="text"
                  name="phone"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="box-input">
                <label htmlFor="">Mensagem</label>
                <textarea
                  placeholder="Mensagem"
                  name="message"
                  required
                  onChange={handleChange}
                />
              </div>

              <input type="text" name="honeypot" style={{ display: "none" }} />

              <div className="box-button">
                {/* Button submit Component */}
                <SendMessage handleSubmi={handleSubmit} />
              </div>
            </form>

            {/* Pop-up Component */}
            {showModal && (
              <PopupMessage response={response} closeModal={closeModal} />
            )}
          </FormContainer>
        </Box>
      </Container>
    </Section>
  );
};
