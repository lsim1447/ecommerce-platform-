"use client";
import Link from "next/link";
import styled from "styled-components";

// Wrapper for the navigation bar
const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #282c34; /* Dark background */
  padding: 1rem 2rem; /* Spacing */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

// Logo or Title
const Logo = styled.h1`
  color: #61dafb; /* React blue */
  font-size: 1.5rem; /* Font size */
`;

// Navigation Links Container
const NavLinks = styled.div`
  display: flex;
  gap: 2rem; /* Spacing between links */
`;

// Styled link
const StyledLink = styled(Link)`
  color: #ffffff; /* White text */
  text-decoration: none; /* Remove underline */
  font-size: 1rem; /* Font size */
  position: relative; /* For the hover effect */

  &::after {
    content: "";
    display: block;
    height: 2px;
    width: 100%;
    background: #61dafb; /* Blue underline */
    transform: scaleX(0); /* Initially hide the underline */
    transition: transform 0.3s ease; /* Animation */
    position: absolute;
    bottom: -5px; /* Position below the text */
    left: 0; /* Align to the left */
  }

  &:hover::after {
    transform: scaleX(1); /* Show the underline on hover */
  }
`;

export const Navigation: React.FC = () => {
  return (
    <NavWrapper>
      <Logo>My Store</Logo>
      <NavLinks>
        <StyledLink href="http://localhost:3001">Dashboard</StyledLink>
        <StyledLink href="http://localhost:3000">Store</StyledLink>
      </NavLinks>
    </NavWrapper>
  );
};
