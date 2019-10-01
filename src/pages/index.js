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
        *, *:before, *:after
        {
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
    justify-content: center;
    align-items: center;
    background-color: ${colors.bgInverse};
    color: ${colors.textInverse};
`;

const Nav = styled.ul`
    position: sticky;
    top: 0px;
    padding: 12px 0;
    margin: 0;
    margin-top: -80px;
    text-align: center;
    background-color: ${colors.bgInverse};
    z-index: 2;
    > li {
        display: inline-block;
        list-style-type: none;
        margin: 0 15px;
        text-transform: uppercase;
        font-size: 18px;
        &:first-child {
            border: 2px solid;
            border-radius: 4px;
            padding: 0 4px;
            color: ${colors.textAccent4};
            span:first-child {
                color: ${colors.textAccent1};
            }
            span:nth-child(2) {
                color: ${colors.textAccent2};
            }
        }
        &:nth-child(2n+3) {
            margin: 0;
            color: ${colors.textInverse};
        }
        @media (${breakpoints.phone}) {
            margin: 0 8px;
            font-size: 3.5vw;
        }
        > a {
            color: ${colors.link};
            font-weight: bold;
        }
    }
`;

const Spacer = styled.div`
    height: 40px;
    background-color: ${colors.bgInverse};
`;

const Title = styled.div`
    display: flex;
    flex-direction: row;
    > span {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 6px;
        border: 2px solid;
        border-radius: 4px;
        height: 7vw;
        width: 7vw;
        max-height: 50px;
        max-width: 50px;
        font-size: 24px;
        font-weight: bold;
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
        &:nth-child(-n+5) > span {
            margin-bottom: 3px;
        }
        @media (${breakpoints.phone}) {
            margin: 0 2px;
            font-size: 4vw;
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
            font-size: 3.5vw;
        }
`;


const About = styled.section`
    display: flex;
    flex-direction: row;
    > div:first-child {
        position: sticky;
        top: 45px;
        width: 50%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${colors.bgSection1};
        font-family: ${fonts.monospace};
        font-size: 36px;
    }
    > div:nth-child(2) {
        width: 50%;
        padding: 0 20px;
    }
`;

class Site extends React.Component {
    render() {
        return (
            <div>
                <GlobalStyles />
                <Home>
                    <Title>
                        <span><span>m</span></span>
                        <span><span>i</span></span>
                        <span><span>k</span></span>
                        <span><span>e</span></span>
                        <span><span>y</span></span>
                        <span>G</span>
                        <span>E</span>
                        <span>E</span>
                    </Title>
                    <Subtitle>&lt;Software Engineer /&gt;</Subtitle>
                    <Subtitle>Los Angeles, CA</Subtitle>
                </Home>
                <Nav>
                    <li><a><span>M</span><span>G</span></a></li>
                    <li><a>About</a></li>
                    <li>|</li>
                    <li><a>Resume</a></li>
                    <li>|</li>
                    <li><a>Contact</a></li>
                    <li>|</li>
                    <li><a>Blog</a></li>
                </Nav>
                <Spacer />
                <About>
                    <div>&lt;About /&gt;</div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mattis vulputate enim nulla aliquet porttitor. Sed egestas egestas fringilla phasellus. Nisl vel pretium lectus quam id leo in vitae turpis. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Amet mauris commodo quis imperdiet massa. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Tellus rutrum tellus pellentesque eu tincidunt tortor. Non blandit massa enim nec dui nunc mattis enim. Etiam erat velit scelerisque in dictum non consectetur. Libero volutpat sed cras ornare.</p>
                    </div>
                </About>
                <About>
                    <div>&lt;Résumé /&gt;</div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mattis vulputate enim nulla aliquet porttitor. Sed egestas egestas fringilla phasellus. Nisl vel pretium lectus quam id leo in vitae turpis. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Amet mauris commodo quis imperdiet massa. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Tellus rutrum tellus pellentesque eu tincidunt tortor. Non blandit massa enim nec dui nunc mattis enim. Etiam erat velit scelerisque in dictum non consectetur. Libero volutpat sed cras ornare.</p>
                    </div>
                </About>
            </div>
        );
    }
}

export default Site;