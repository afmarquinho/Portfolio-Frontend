import { styled } from "styled-components";
import foto from "../assets/foto.png";

const Foto = () => {
  return (
    <FotoContenedor className="foto-contenedor">
      <Subcontenendor>
        <img src={foto} alt="" />
      </Subcontenendor>
    </FotoContenedor>
  );
};

export default Foto;
const FotoContenedor = styled.div`
  width: 25rem;
  height: 16rem;
  position: relative;
  border-radius: 10px;
  background-color: #07070f;
  margin-top: 1rem;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    transform: scale(1.02);
    border-radius: 10px;
  }

  &::before {
    left: 0;
    bottom: 0;
    z-index: -1;
    background: linear-gradient(to right top, transparent 80%, #00c3ff);
  }
  &::after {
    right: 0;
    top: 0;
    z-index: -1;
    background: linear-gradient(to left bottom, transparent 80%, #00c3ff);
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
