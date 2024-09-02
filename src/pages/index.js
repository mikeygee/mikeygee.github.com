import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { colors, fonts, breakpoints, GlobalStyles } from '../styles';

import {
    IoLogoGithub,
    IoIosMail,
    IoLogoTwitter,
    IoLogoLinkedin,
} from 'react-icons/io';

import {
    Nav,
    Footer,
} from '../components';
import AboutContent from '../components/About.js';
import WorkContent from '../components/Work.js';

export const Home = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: ${colors.bgInverse};
    color: ${colors.textInverse};
`;

const Spacer = styled.div`
    height: 100px;
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
        font-size: 1.5em;
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
        &:nth-child(-n + 5) > span {
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
    font-size: 1.1em;
    letter-spacing: 2px;
    text-align: center;
    margin-top: 20px;
    @media (${breakpoints.phone}) {
        font-size: 3.5vw;
    }
`;

const StickyTitle = styled.div`
    position: sticky;
    top: 45px;
    width: 50%;
    height: calc(100vh - 45px);
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        font-family: ${fonts.monospace};
        font-size: 3em;
        font-weight: normal;
        @media (${breakpoints.tablet}) {
            font-size: 1.5em;
            margin: 0.5em 0;
        }
    }
    @media (${breakpoints.tablet}) {
        height: auto;
    }
`;

const Content = styled.div`
    padding: 2.5em;
    line-height: 1.5;
    @media (${breakpoints.phone}) {
        padding: 2em;
    }
`;

const Section = styled.section`
    display: flex;
    flex-direction: row;
    min-height: calc(100vh - 45px);
    > div {
        width: 50%;
    }
    @media (${breakpoints.tablet}) {
        flex-direction: column;
        > div {
            width: auto;
        }
    }
`;

const About = styled(Section)`
    > div:first-child {
        background-color: ${colors.bgSection1};
    }
    > div:nth-child(2) {
        img {
            width: 50%;
        }
    }
`;

const Work = styled(Section)`
    > div:nth-child(2) {
        background-color: ${colors.bgSection2};
        @media (${breakpoints.tablet}) {
            order: -1;
        }
    }
`;

const Contact = styled(Section)`
    > div:first-child {
        background-color: ${colors.bgSection3};
    }
`;


const IconRow = styled.div`
    display: flex;
    align-items: center;
    > a {
        margin-left: 1.2em;
        color: ${colors.link};
    }
    line-height: 3;
`;

const SectionHeader = ({ children }) => (
    <StickyTitle>
        <h1>&lt;{children} /&gt;</h1>
    </StickyTitle>
);

class Site extends React.Component {
    render() {
        return (
            <div>
                <GlobalStyles />
                <Helmet>
                    <title>
                        Mikey Gee | Software Engineer
                    </title>
                </Helmet>
                <Home>
                    <Title>
                        <span>
                            <span>m</span>
                        </span>
                        <span>
                            <span>i</span>
                        </span>
                        <span>
                            <span>k</span>
                        </span>
                        <span>
                            <span>e</span>
                        </span>
                        <span>
                            <span>y</span>
                        </span>
                        <span>G</span>
                        <span>E</span>
                        <span>E</span>
                    </Title>
                    <Subtitle>&lt;Software Engineer /&gt;</Subtitle>
                </Home>
                <Nav type="sticky" isRoot={true} />
                <Spacer />
                <About id="about">
                    <SectionHeader>About</SectionHeader>
                    <Content>
                        <AboutContent />
                    </Content>
                </About>
                <Work id="work">
                    <Content>
                        <WorkContent />
                    </Content>
                    <SectionHeader>Work</SectionHeader>
                </Work>
                <Contact id="contact">
                    <SectionHeader>Contact</SectionHeader>
                    <Content>
                        <p>The best way to reach me is by e-mail.</p>
                        <p>
                            I am currently available for short term (3 months or
                            less) or part time work only. There is no need to
                            contact me regarding full time positions. If you
                            have a smaller project or something not too time
                            sensitive, I'd be happy to discuss working together.
                        </p>
                        <IconRow>
                            <IoIosMail size="30px" />
                            <a
                                href="mailto:mikey@mikeygee.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                mikey@mikeygee.com
                            </a>
                        </IconRow>
                        <IconRow>
                            <IoLogoLinkedin size="30px" />
                            <a
                                href="https://www.linkedin.com/in/michaelcgee"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                        </IconRow>
                        <IconRow>
                            <IoLogoGithub size="30px" />
                            <a
                                href="https://github.com/mikeygee"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                mikeygee
                            </a>
                        </IconRow>
                        <IconRow>
                            <IoLogoTwitter size="30px" />
                            <a
                                href="https://twitter.com/geeplusplus"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                geeplusplus
                            </a>
                        </IconRow>
                    </Content>
                </Contact>
                <Footer />
            </div>
        );
    }
}

export default Site;
