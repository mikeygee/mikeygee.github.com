import React from 'react';
import styled from 'styled-components';

import { colors, breakpoints, fonts } from '../styles';

import { IoLogoGithub } from 'react-icons/io';

export const CenteredRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledHomeLogo = styled.a`
    border: 2px solid;
    border-radius: 4px;
    padding: 0 4px;
    color: ${colors.textAccent4};
    font-size: 1.1em;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    span:first-child {
        color: ${colors.textAccent1};
    }
    span:nth-child(2) {
        color: ${colors.textAccent2};
    }
`;

export const HomeLogo = ({ to, onClick }) => (
  <StyledHomeLogo as="a" href={to || '#'} onClick={onClick}>
    <span>M</span>
    <span>G</span>
  </StyledHomeLogo>
);

const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    margin-top: -140px;
    background-color: ${colors.bgInverse};
    z-index: 2;
    min-height: 45px;
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
        > li {
            display: flex;
            align-items: center;
            list-style-type: none;
            margin: 0 0.5em;
            @media (${breakpoints.phone}) {
                margin: 0 0.25em;
            }
            &:first-child {
                margin-right: 1.6em;
                @media (${breakpoints.phone}) {
                    margin-right: 0.8em;
                }
                > a {
                    color: ${colors.textAccent4};
                }
            }
            &:nth-child(n + 2):nth-child(-n + 3) {
                border-right: 1px solid ${colors.textInverse};
                padding-right: 1em;
                @media (${breakpoints.phone}) {
                    padding-right: 0.5em;
                }
            }
            a {
                text-transform: uppercase;
                color: ${colors.linkInverse};
                font-size: 1.1em;
                font-weight: bold;
                text-decoration: none;
                @media (${breakpoints.phone}) {
                    font-size: 0.85em;
                }
            }
        }
    }
`;

const StyledFixedNav = styled(StyledNav)`
    position: fixed;
    width: 100%;
    margin-top: 0;
`;

const handleNavLinkClick = (e, isRoot, to) => {
  if (isRoot) {
    e.preventDefault();
    const target = document.querySelector(`#${to}`);
    if (target) {
      window.scrollTo({ top: target.offsetTop - 45, behavior: 'smooth' });
    }
  }
};

const NavLink = ({ isRoot, to, children }) => {
  const href = `${isRoot ? '' : '/'}#${to}`;
  return (
    <a href={href} onClick={(e) => handleNavLinkClick(e, isRoot, to)}>
      {children}
    </a>
  );
};

const scrollToTop = e => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const Nav = ({ type, isRoot }) => {
  const NavComponent = type === 'sticky' ? StyledNav : StyledFixedNav;
  const homeLogoProps = {
    to: isRoot ? null : '/',
    onClick: isRoot ? scrollToTop : null,
  };
  return (
    <NavComponent>
      <ul>
        <li>
          <HomeLogo {...homeLogoProps} />
        </li>
        <li>
          <NavLink to="about" isRoot={isRoot}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="work" isRoot={isRoot}>
            Work
          </NavLink>
        </li>
        <li>
          <NavLink to="contact" isRoot={isRoot}>
            Contact
          </NavLink>
        </li>
      </ul>
    </NavComponent>
  );
};

const StyledSectionSubHeader = styled.h2`
    font-family: ${fonts.monospace};
    font-size: 1.6em;
    font-weight: normal;
    margin: 2em 0 0.5em;
    @media (${breakpoints.tablet}) {
        font-size: 1.2em;
    }
`;

export const SectionSubHeader = ({ children }) => (
  <StyledSectionSubHeader>&lt;{children}&gt;</StyledSectionSubHeader>
);

const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
    padding: 1em;
    background-color: ${colors.bgInverse};
    color: ${colors.textInverse};
    > span {
        margin: 0 0.5em;
        a {
            color: ${colors.textInverse};
        }
    }
`;

export const Footer = () => (
  <StyledFooter>
    <span>© 2026 Mikey Gee</span>
    <span>
      <a
        href="https://github.com/mikeygee/mikeygee.github.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoGithub size="2em" />
      </a>
    </span>
  </StyledFooter>
);
