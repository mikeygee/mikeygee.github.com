import React from "react"
import styled, { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';

import { colors, fonts, breakpoints } from '../styles';

import { IoIosPin, IoLogoGithub } from 'react-icons/io';

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        font-family: ${fonts.sansSerif};
        box-sizing: border-box;
        div,
        input {
            box-sizing: inherit;
        }
        color: ${colors.textPrimary};
        @media (${breakpoints.phone}) {
            font-size: 13px;
        }
    }
`;

const Home = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.bgInverse};
    color: ${colors.textInverse};
`;

const Nav = styled.ul`
    padding: 0;
    margin: 0;
    margin-bottom: 40px;
    > li {
        display: inline-block;
        list-style-type: none;
        margin: 0 15px;
        text-transform: uppercase;
        &:nth-child(2n) {
            margin: 0;
        }
        @media (${breakpoints.phone}) {
            margin: 0 10px;
        }
        > a {
            color: ${colors.link};
            font-weight: bold;
        }
    }
`;

const Title = styled.div`
    > span {
        display: inline-block;
        margin: 0 6px;
        border: 2px solid;
        border-radius: 4px;
        text-align: center;
        vertical-align: middle;
        height: 50px;
        width: 50px;
        font-size: 24px;
        font-weight: bold;
        > span {
            display: inline-block;
            vertical-align: middle;
            height: 100%;
        }
        &:nth-child(1) {
            color: ${colors.textAccent1};
        }
        &:nth-child(2) {
            color: ${colors.textAccent2};
        }
        &:nth-child(3) {
            color: ${colors.textAccent3};
        }
        &:nth-child(4) {
            color: ${colors.textAccent4};
        }
        &:nth-child(5) {
            color: ${colors.textAccent5};
        }
        &:nth-child(6) {
            color: ${colors.textAccent6};
        }
        &:nth-child(7) {
            color: ${colors.textAccent2};
        }
        &:nth-child(8) {
            color: ${colors.textAccent1};
        }
        &:nth-child(n+6):nth-child(-n+8) > span {
            height: 105%;
        }
        @media (${breakpoints.phone}) {
            margin: 0 3px;
            height: 24px;
            width: 24px;
            font-size: 16px;
        }
    }
`;

const Subtitle = styled.div`
    font-family: ${fonts.monospace};
    font-size: 18px;
    letter-spacing: 2px;
    text-align: center;
    margin-top: 20px;
    &:last-child {
        margin-top: 6px;
    }
        @media (${breakpoints.phone}) {
            font-size: 13px;
        }
`;

class Site extends React.Component {
    render() {
        return (
            <div>
                <GlobalStyles />
                <Home>
                    <div></div>
                    <div>
                        <Title>
                            <span><span></span>m</span>
                            <span><span></span>i</span>
                            <span><span></span>k</span>
                            <span><span></span>e</span>
                            <span><span></span>y</span>
                            <span><span></span>G</span>
                            <span><span></span>E</span>
                            <span><span></span>E</span>
                        </Title>
                        <Subtitle>&lt;Software Engineer /&gt;</Subtitle>
                        <Subtitle>Los Angeles, CA</Subtitle>
                    </div>
                    <Nav>
                        <li><a>About</a></li>
                        <li>|</li>
                        <li><a>Resume</a></li>
                        <li>|</li>
                        <li><a>Contact</a></li>
                        <li>|</li>
                        <li><a>Blog</a></li>
                    </Nav>
                </Home>
            </div>
        );
    }
}

export default Site;