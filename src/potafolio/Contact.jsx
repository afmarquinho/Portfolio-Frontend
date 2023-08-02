import React, { useState } from "react";
import Layout from "../Layout/Layout";
import styled from "@emotion/styled";

const Contact = () => {
  const [nombre, setNombre] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [alerta, setAlerta] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, tel, email, asunto, mensaje].includes("")) {
      setAlerta("No puede haber campos vacíos");
      return;
    }
    setAlerta("");
  };
  return (
    <Layout>
      <>
        <Titulo className="contact__me">Contact me</Titulo>
        <Container>
          <div className="content__container">
            <div>
              <Subtitulos className="email">e-mail:</Subtitulos>
              <a className="email tel" href="mailto:fernandez9029@gmail.com">
                fernandez9029@gmail.com
              </a>
            </div>
            <div>
              <Subtitulos className="telephone">Telephone:</Subtitulos>
              <a className="tel telephone" href="tel:+573187794472">
                +573187794472
              </a>
            </div>
            <div className="redes__sociales2__container">
              <Subtitulos>Social networks</Subtitulos>
              <div className="redes__sociales2">
                <a
                  href="https://www.linkedin.com/in/marcofern%C3%A1ndez/"
                  className="sociales linkedIn"
                >
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="#eab224"/></svg>
                </a>
                <a
                  href="https://github.com/afmarquinho"
                  className="sociales github"
                >
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" fill="#eab224"/></svg>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=573187794472&text=¡Hola,%20estoy%20interesado%20en%20tu%20portafolio?"
                  className="sociales whatsapp"
                >
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.036 5.339c-3.635 0-6.591 2.956-6.593 6.589-.001 1.483.434 2.594 1.164 3.756l-.666 2.432 2.494-.654c1.117.663 2.184 1.061 3.595 1.061 3.632 0 6.591-2.956 6.592-6.59.003-3.641-2.942-6.593-6.586-6.594zm3.876 9.423c-.165.463-.957.885-1.337.942-.341.051-.773.072-1.248-.078-.288-.091-.657-.213-1.129-.417-1.987-.858-3.285-2.859-3.384-2.991-.099-.132-.809-1.074-.809-2.049 0-.975.512-1.454.693-1.653.182-.2.396-.25.528-.25l.38.007c.122.006.285-.046.446.34.165.397.561 1.372.611 1.471.049.099.083.215.016.347-.066.132-.099.215-.198.33l-.297.347c-.099.099-.202.206-.087.404.116.198.513.847 1.102 1.372.757.675 1.395.884 1.593.983.198.099.314.083.429-.05.116-.132.495-.578.627-.777s.264-.165.446-.099 1.156.545 1.354.645c.198.099.33.149.38.231.049.085.049.482-.116.945zm3.088-14.762h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-6.967 19.862c-1.327 0-2.634-.333-3.792-.965l-4.203 1.103 1.125-4.108c-.694-1.202-1.059-2.566-1.058-3.964.002-4.372 3.558-7.928 7.928-7.928 2.121.001 4.112.827 5.609 2.325s2.321 3.491 2.32 5.609c-.002 4.372-3.559 7.928-7.929 7.928z" fill="#eab224"/></svg>
                </a>
            
              </div>
            </div>
          </div>
          <Form action="" className="form" onSubmit={handleSubmit}>
            <Message>Send me a message</Message>
            {alerta && <Alerta>{alerta}</Alerta>}
            <Grupo>
              <div className="input-group">
                <label htmlFor="nombre">Name</label>
                <input
                  type="text"
                  name="nombre"
                  className="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="">Phone</label>
                <input
                  type="tel"
                  name="tel"
                  className="tel"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                />
              </div>
            </Grupo>

            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="">Subject</label>
              <input
                type="text"
                name="asunto"
                className="asunto"
                value={asunto}
                onChange={(e) => setAsunto(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="mensaje">Message</label>
              <textarea
                name="mensaje"
                id=""
                rows="5"
                className="mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              ></textarea>
            </div>
            <BtnEnviar type="submit" value="SENT" />
          </Form>
        </Container>
      </>
    </Layout>
  );
};

export default Contact;

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  @media (min-width: 768px) {
    flex-flow: row wrap;
  }
`;
const Titulo = styled.h2`
  margin: 0;
  color: #fda500;
  font-size: 3rem;
  margin-top: 3rem;
  @media (min-width: 768px) {
    font-size: 4rem;
    margin: 0;
  }
`;
const Subtitulos = styled.h3`
  color: #77dd77;
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  @media (min-width: 768px) {
    padding-left: 4rem;
    font-size: 2rem;
  }
`;
const Message = styled.h2`
  font-size: 2rem;
  color: #fda500;
  margin: 0;
  padding: 0;
  @media (min-width: 768px) {
    padding-left: 4rem;
    margin: 0;
    font-size: 3rem;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  .input-group {
    display: flex;
    flex-direction: column;

    label {
      color: #77dd77;
      font-weight: bold;
    }
    input {
      outline: none;
      border: none;
      height: 3.5rem;
      border-radius: 0.5rem;
      background-color: #fbffe6;
    }
    textarea {
      resize: none;
      outline: none;
      border: none;
      border-radius: 0.5rem;
      background-color: #fbffe6;
    }
  }
`;
const Grupo = styled.div`
  display: flex;
  flex-direction: row;
  margin:0;
  padding:0;
  gap: 1rem;
  .input-group{
    width: 50%;
  }
`;

const BtnEnviar = styled.input`
  border: none;
  height: 3.5rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
  color: black;
  font-weight: bold;
  cursor: pointer;
  background-color: #fda500;
  transition: transform 0.3s ease;
  :hover {
    transform: scale(1.02);
  }
`;
const Alerta = styled.p`
  margin: 0;
  color: black;
  background-color: #fa8c8c;
  border: 2px red solid;
  text-align: center;
`;
