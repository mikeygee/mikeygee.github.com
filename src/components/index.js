import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';

import { colors, breakpoints } from '../styles';

const StyledHomeLogo = styled.a`
    border: 2px solid;
    border-radius: 4px;
    padding: 0 4px;
    color: ${colors.textAccent4};
    font-size: 18px;
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
    <StyledHomeLogo as={to ? Link : null} to={to} onClick={onClick}>
        <span>M</span><span>G</span>
    </StyledHomeLogo>
);

const StyledNav = styled.nav`
    position: sticky;
    top: 0;
    padding: 12px 0;
    margin-top: -80px;
    text-align: center;
    background-color: ${colors.bgInverse};
    z-index: 2;
    ul {
        margin: 0;
        padding: 0;
        > li {
            display: inline-block;
            list-style-type: none;
            margin: 0 15px;
            &:nth-child(2n+3) {
                margin: 0;
                color: ${colors.textInverse};
            }
            @media (${breakpoints.phone}) {
                margin: 0 8px;
                font-size: 3.5vw;
            }
            &:first-child > a {
                color: ${colors.textAccent4};
            }
            a {
                text-transform: uppercase;
                color: ${colors.linkInverse};
                font-size: 18px;
                font-weight: bold;
                text-decoration: none;
            }
        }
    }
`;

const StyledFixedNav = styled(StyledNav)`
    position: fixed;
    padding: 12px 20px;
    width: 100%;
    margin-top: 0;
`;

class NavLink extends React.Component {
    handleClick = e => {
        const { isRoot, to } = this.props;
        if (isRoot) {
            e.preventDefault();
            const target = document.querySelector(`#${to}`);
            target.scrollIntoView({ behavior: 'smooth'});
            setTimeout(() => target.focus(), 1500);
        }
    }
    render() {
        const { isRoot, to, children } = this.props;
        const href = `${isRoot ? '' : '/'}#${to}`;
        return <a href={href} onClick={this.handleClick}>{children}</a>
    }
}

export const Nav = ({ type, isRoot }) => {
    const NavComponent = (type === 'sticky' ? StyledNav : StyledFixedNav);
    return (
        <NavComponent>
            <ul>
                <li><HomeLogo to={isRoot ? null : '/'} /></li>
                <li><NavLink to="about" isRoot={isRoot}>About</NavLink></li>
                <li>|</li>
                <li><NavLink to="resume" isRoot={isRoot}>Résumé</NavLink></li>
                <li>|</li>
                <li><NavLink to="contact" isRoot={isRoot}>Contact</NavLink></li>
                <li>|</li>
                <li><NavLink to="blog" isRoot={isRoot}>Blog</NavLink></li>
            </ul>
        </NavComponent>
    );
};

export const Footer = () => (
    <footer>© 2020 Mikey Gee</footer>
);
