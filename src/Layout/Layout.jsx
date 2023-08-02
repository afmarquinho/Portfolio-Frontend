import styled from "@emotion/styled";
import Navbar from "../potafolio/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Flex>
        <Navbar />
        <Main>{children}</Main>
      </Flex>
       <CirculosContenedor className="circulosContenedor1 ">
        <Circulo />
      </CirculosContenedor>
      <CirculosContenedor className="circulosContenedor2 ">
        <Circulo />
      </CirculosContenedor>
      <CirculosContenedor className="circulosContenedor3 ">
        <Circulo />
      </CirculosContenedor>
      <CirculosContenedor className="circulosContenedor4 ">
        <Circulo />
      </CirculosContenedor>
      <CirculosContenedor className="circulosContenedor5 ">
        <Circulo />
      </CirculosContenedor>
      <CirculosContenedor className="circulosContenedor6 ">
        <Circulo />
      </CirculosContenedor>
      <CirculosContenedor className="circulosContenedor7 ">
        <Circulo />
      </CirculosContenedor>
      <CirculosContenedor className="circulosContenedor8 ">
        <Circulo />
      </CirculosContenedor> 
      <CirculosContenedor className="circulosContenedor9 ">
        <Circulo />
      </CirculosContenedor> 
      <CirculosContenedor className="circulosContenedor10 ">
        <Circulo />
      </CirculosContenedor> 
      <CirculosContenedor className="circulosContenedor11 ">
        <Circulo />
      </CirculosContenedor> 
    </>
  );
};

export default Layout;

const Flex = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Main = styled.main`
  margin: 0;
  padding: 0 2rem 2rem 2rem;
  width: 100%;
`;

const CirculosContenedor = styled.div`
  position: absolute;
  margin: 0;
  padding: 0;
`;

const Circulo = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #4e4e4ead;
  position: relative;
  z-index: -200;
  top: 3rem;
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transform: scale(1.5);
    background-color: #504f4f5f;
    z-index: -100;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
