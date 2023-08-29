import { styled } from "styled-components";
import foto from "../assets/foto.png";

const Foto = () => {
  return (
    <Div className="d-flex justify-center align-center">
    <FotoContenedor className="foto-contenedor">
      <Subcontenendor>
        <img src={foto} alt="" />
      </Subcontenendor>
    </FotoContenedor>
     </Div>
  );
};

export default Foto;
const Div = styled.div`
width: 25.5rem;
height: 16.5rem;
overflow: hidden;
border-radius: 10px;
margin-top: 1rem;
`
const FotoContenedor = styled.div`
  width: 25rem;
  height: 16rem;
  position: relative;
  border-radius: 10px;
  background-color: #07070f;

  /* &::before, */
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    transform: scale(1.2);
    border-radius: 10px;
    animation: rotate 5s linear infinite;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg) scale(2);
    }
    100% {
      transform: rotate(360deg) scale(2);
    }
  }

  /* &::before {
    left: 0;
    bottom: 0;
    z-index: -1;
    background: linear-gradient(to right top, transparent 50%, #00c3ff);
  } */
  &::after {
    right: 0;
    top: 0;
    z-index: -1;
    background: linear-gradient(to left, transparent, #fae956, #00c3ff, transparent);
  }

  
`;
const Subcontenendor = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    margin: 0;
    object-position: 25px -30px;
    object-fit: cover;
    width: 80%;
  }
`;
