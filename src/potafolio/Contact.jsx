import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";


const Contact = () => {
  const [nombre, setNombre] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [alerta, setAlerta] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([nombre, tel, email, asunto, mensaje].includes("")) {
      setAlerta({ msg: " No puede haber campos vacíos", error: true });
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:4000/api/contact", {
        name: nombre,
        phone: tel,
        email: email,
        subject: asunto,
        message: mensaje,
      });
      setLoading(true);
      
      setTimeout(() => {
        setAlerta({});
        setNombre("");
        setTel("");
        setEmail("");
        setAsunto("");
        setMensaje("");
        setAlerta({
          msg: data.msg,
          success: true,
        });
        setLoading(false);
      }, 3000);
      setTimeout(() => {
        setAlerta({});
      }, 6000);
    } catch (error) {
      console.log(error);
    }
  // TODO: ARREGLAR EL ACCESO A LOS ICONOS Y LA FOTO
  };
  return (
    <>
      <h2 className=" title contact__me">Contact me</h2>
      <Container>
        <div className="content__container w-100">
          <div>
            <H3 className="email">e-mail:</H3>
            <a className="email tel" href="mailto:fernandez9029@gmail.com" target="blank">
              fernandez9029@gmail.com
            </a>
          </div>
        </div>
        {loading ? (
          <>
            <div className="sk-chase">
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
            </div>
          </>
        ) : (
          <Form action="" className="form" onSubmit={handleSubmit}>
            <H3>Send me a message</H3>
            {alerta.msg &&
              (alerta.error ? (
                <Alerta>{alerta.msg}</Alerta>
              ) : (
                <Success>{alerta.msg}</Success>
              ))}
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
        )}
      </Container>
    </>
  );
};

export default Contact;

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  @media (min-width: 768px) {
    flex-flow: row wrap;
    margin-bottom: 10rem;
  }
`;

const H3 = styled.h3`
  display: inline-block;
  margin-right: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  .input-group {
    display: flex;
    flex-direction: column;

    input {
      outline: none;
      border: 1px solid #d3d9f3;
      height: 3.5rem;
      width: 100%;
      background-color: #00aeff16;
      color: #d3d9f3;
      padding-left: 1rem;
    }
    textarea {
      resize: none;
      outline: none;
      border: 1px solid #d3d9f3;
      background-color: #00aeff16;
      color: #d3d9f3;
      padding-left: 1rem;
      width: 100%;
    }
  }
`;

const Grupo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  .input-group {
    width: 50%;
  }
`;

const BtnEnviar = styled.input`
  border: none;
  height: 3.5rem;
  margin-top: 1rem;
  border-radius: 5px;
  color: black;
  font-weight: bold;
  cursor: pointer;
  background-color: #fda500;
  transition: transform 0.3s ease;
  :hover {
    transform: scale(1.02);
    background-color: #00c3ff;
  }
`;
const Alerta = styled.p`
  margin: 0;
  color: black;
  background-color: #fa8c8c;
  border: 2px red solid;
  text-align: center;
`;
const Success = styled.p`
  margin: 0;
  color: black;
  background-color: #00c3ff;
  border: none;
  text-align: center;
`;
