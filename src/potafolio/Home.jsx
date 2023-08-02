import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import foto from "../assets/foto5.jpg";

const Home = () => {
  return (
    <>
      <Layout>
        <>
          <Contenedor>
            <IMGContenedor className="imagen-contenedor">
              <IMG src={foto} alt="imagen" />
            </IMGContenedor>
            <Info>
              <p className="mi_nombre">Marco Fernández</p>
              <p className="front">MERN Stack Developer</p>
              <p className="profession">Industrial Administrator</p>
              <p className="make__happen">
                <span className="make"> &lt;make&gt;</span> it happen
                <span className="make">&lt;/make&lt;</span>
              </p>
              <Info2 className="doForYou-container">
                <p id="doForU" className="title">
                  What Can I do for you?
                </p>
                <p className="content">
                  I have a solid foundation in HTML, CSS, and JavaScript, and I
                  am eager to apply my skills to your project. I can create
                  responsive, user-friendly websites and applications that
                  provide an exceptional user experience.
                </p>
              </Info2>
            </Info>
          </Contenedor>

          <Button className="more__info" type="buton">
            <Link className="more__info__a" href="portfolio.html">
              My Work
            </Link>
          </Button>
        </>
      </Layout>
    </>
  );
};

export default Home;

const Contenedor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const IMGContenedor = styled.div`
  width: 18%;
  overflow: hidden;
`;
const IMG = styled.img``;

const Info = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: start;
  width: 70%;

  p {
    margin: 0;
  }
  .mi_nombre {
    letter-spacing: 2.5rem;
    font-weight: 900;
    color: #77dd77;
    font-size: 6rem;
    line-height: 7rem;
    margin-bottom: 1.5rem;
    @media (max-width: 768px) {
      padding-top: 6rem;
      font-size: 4rem;
      letter-spacing: 1rem;
      line-height: 5rem;
      @media (max-width: 400px) {
        font-size: 3rem;
        letter-spacing: 1rem;
        line-height: 4rem;
      }
    }
  }
  .front {
    color: white;
    font-weight: bold;
    font-size: 2rem;
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
  .profession {
    color: #77dd77;
    font-weight: 900;
    font-size: 2rem;
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
  .make__happen {
    color: white;
    font-style: italic;
    font-size: 2rem;
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
    .make {
      color: #fda500;
    }
  }
`;
const Info2 = styled.div`
  width: 80%;
  @media (max-width: 768px) {
    width: 90%;
  }
  margin-top: 2rem;
  .title {
    color: #77dd77;
    font-weight: bold;
    font-size: 2.5rem;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  .content {
    color: white;
    text-align: justify;
    font-size: 2rem;
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;
const Button = styled.button`
  background-color: #1f1e1e;
  border: none;
  height: 5rem;
  width: 15rem;
  border-radius: 10px;
  cursor: pointer;
  position: absolute;
  bottom: 3rem;
  right: 5rem;
  transition: transform 0.5s ease;
  @media (max-width: 768px) {
    height: 3rem;
    width: 12rem;
  }
  :hover {
    transform: scale(1.2);
    background-color: #777777;
  }

  .more__info__a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    position: relative;
    height: 5rem;
    width: 15rem;
    @media (max-width: 768px) {
     font-size: 1.5rem;
    }
  }
`;
