import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Navbar = () => {
  return (
    <>
      <NAV className="nav">
        <StyledLink className="link" href="#doForU">
          HOME
        </StyledLink>
        <StyledLink className="link" href="#about-me">
          {" "}
          <span>About me</span>
        </StyledLink>

        <StyledLink className="link" href="/portfolio">
          {" "}
          <span>Portfolio</span>
        </StyledLink>
        <StyledLink className="link" href="/contact-me">
          {" "}
          <span>Contact me</span>
        </StyledLink>
        <StyledLink
          className="link btn__download"
          href="https://drive.google.com/uc?export=download&id=11AYxLF7h9fThXf2c0BJcIGfWrNKh-gDn"
          target="_blank"
          download
        >
          {" "}
          <span>Download CV</span>
        </StyledLink>
      </NAV>
    </>
  );
};

export default Navbar;

const NAV = styled.nav`
  display: none;
  @media (min-width: 992px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100vw;
    max-width: 120rem;
    padding: 2rem;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1000;
    background-color: #07070f;
  }
`;

const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;
  height: 4rem;
  width: 11.5rem;
  border-radius: 20px;
  padding: 1rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-top: 2px solid #4ec1dc;
    border-bottom: 2px solid #4ec1dc;
    transition: 0.5s;
    transform: scaleY(2);
    opacity: 0;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: #4ec1dc;
    transition: 0.5s;
    transform: scale(0);
    opacity: 0;
    z-index: -1;
  }
  &:hover {
    color: #ffffff;
    font-weight: bold;
    &::before {
      transform: scale(1);
      opacity: 1;
    }
    &::after {
      transform: scaleY(1);
      opacity: 1;
    }
  }
`;
