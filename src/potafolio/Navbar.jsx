import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleNavbar = () => {
    setIsVisible(!isVisible);
  };

  const home = () => {
    setIsVisible(!isVisible);
  };
  const about = () => {
    setIsVisible(!isVisible);
  };
  const iDo = () => {
    setIsVisible(!isVisible);
  };
  const portfolio = () => {
    setIsVisible(!isVisible);
  };
  const contact = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <NAV className="nav" isVisible={isVisible}>
        <StyledLink className="link" to="/" onClick={home}>
          HOME
        </StyledLink>
        <StyledLink className="link" to="/about" onClick={about}>
          {" "}
          <span>About me</span>
        </StyledLink>
        <StyledLink className="link i__do"  to="/what-i-do" onClick={iDo}>
          {" "}
          <span>What I do </span>
        </StyledLink>
        <StyledLink className="link" to="/portfolio"onClick={portfolio}>
          {" "}
          <span>Portfolio</span>
        </StyledLink>
        <StyledLink className="link" to="/contact-me"onClick={contact}>
          {" "}
          <span>Contact me</span>
        </StyledLink>
        <StyledLink
          className="link btn__download"
          href="https://drive.google.com/uc?export=download&id=11AYxLF7h9fThXf2c0BJcIGfWrNKh-gDn"
          target="_blank"
          download
          onClick={about}
        >
          {" "}
          <span>Download CV</span>
        </StyledLink>
      </NAV>
      <Menu className="btn-menu" onClick={toggleNavbar}>
        {isVisible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#ffffff"
            className="w-6 h-6"
            height="30"
            width="30"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#ffffff"
            className="w-6 h-6"
            height="30"
            width="30"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        )}
      </Menu>
    </>
  );
};

export default Navbar;

const NAV = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-width: 120rem;
  padding: 2rem;
  @media (max-width: 768px) {
    position: absolute;
    z-index: 1000;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #204351;
    height: 100vh;
    padding-top: 10rem;
    top: 0;
    right: 0;
    transition: transform 0.5s ease-in-out;
    transform-origin: right;
    transform: ${({ isVisible }) =>
      isVisible ? "translateX(0)" : "translateX(100%)"};
  }
`;

const StyledLink = styled(Link)`
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
  /* background-color: #444343; */
  color: #bebdbd;

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
const Menu = styled.button`
  position: absolute;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  top: 3rem;
  right: 3rem;
  z-index: 1500;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;
