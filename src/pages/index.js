import React from 'react'
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import { colors, fonts, breakpoints, GlobalStyles } from '../styles';

import { IoIosPin, IoLogoGithub, IoIosMail, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io';

import HeadshotImg from '../images/headshotbw.png';
import YSports from '../images/ysports.png';

import {
    CenteredRow,
    Nav,
    BlogContainer,
    Post,
    Archive,
    ArchivePost,
    Footer,
} from '../components';
import ResumeContent from '../components/Resume.js';

const PREVIEW_LIMIT = 10;

const Home = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: ${colors.bgInverse};
    color: ${colors.textInverse};
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

const StickyTitle = styled.div`
    position: sticky;
    top: 45px;
    width: 50%;
    height: calc(100vh - 45px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    h1 {
        font-family: ${fonts.monospace};
        font-size: 3em;
        font-weight: normal;
        @media (${breakpoints.tablet}) {
            font-size: 1.5em;
        }
    }
    @media (${breakpoints.tablet}) {
        height: auto;
    }
`;

const Content = styled.div`
    padding: 60px;
    line-height: 1.5;
    @media (${breakpoints.tablet}) {
        padding: 40px;
    }
    @media (${breakpoints.phone}) {
        padding: 20px;
    }
`;

const Section = styled.section`
    display: flex;
    flex-direction: row;
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

const Resume = styled(Section)`
    > div:nth-child(2) {
        background-color: ${colors.bgSection2};
        @media (${breakpoints.tablet}) {
            order: -1;
        }
    }
    h2 {
        font-family: ${fonts.monospace};
        font-size: 1.5em;
        font-weight: normal;
        @media (${breakpoints.tablet}) {
            font-size: 1.2em;
        }
    }
`;

const Contact = styled(Section)`
    > div:first-child {
        background-color: ${colors.bgSection3};
    }
`;

const Blog = styled(Section)`
    > div:nth-child(2) {
        background-color: ${colors.bgSection4};
        @media (${breakpoints.tablet}) {
            order: -1;
        }
    }
`;

const IconRow = styled.div`
    display: flex;
    align-items: center;
    > a {
        margin-left: 20px;
        color: ${colors.link};
    }
    line-height: 3;
`;

const SectionHeader = ({ children }) => (
    <StickyTitle><h1>&lt;{children} /&gt;</h1></StickyTitle>
);

class Site extends React.Component {
    componentDidMount() {
        console.log('did mount', window.location);
    }
    render() {
        const { data } = this.props;
        console.log(data);
        const { edges } = data.allMarkdownRemark;
        const postPreviews = [];
        const archivePosts = [];
        edges.forEach((edge = {}, i) => {
            let node = edge.node;
            archivePosts.push(<ArchivePost key={`archive${i}`} {...node} />);
            if (i < PREVIEW_LIMIT) {
                postPreviews.push(<Post key={`post${i}`} isPreview={true} {...node} />);
            }
        });

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
                <Nav type="sticky" isRoot={true} />
                <Spacer />
                <About id="about">
                    <SectionHeader>About</SectionHeader>
                    <Content>
                        <CenteredRow><img src={HeadshotImg} alt="Mikey Gee headshot" /></CenteredRow>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mattis vulputate enim nulla aliquet porttitor. Sed egestas egestas fringilla phasellus. Nisl vel pretium lectus quam id leo in vitae turpis. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Amet mauris commodo quis imperdiet massa. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Tellus rutrum tellus pellentesque eu tincidunt tortor. Non blandit massa enim nec dui nunc mattis enim. Etiam erat velit scelerisque in dictum non consectetur. Libero volutpat sed cras ornare.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mattis vulputate enim nulla aliquet porttitor. Sed egestas egestas fringilla phasellus. Nisl vel pretium lectus quam id leo in vitae turpis. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Amet mauris commodo quis imperdiet massa. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Tellus rutrum tellus pellentesque eu tincidunt tortor. Non blandit massa enim nec dui nunc mattis enim. Etiam erat velit scelerisque in dictum non consectetur. Libero volutpat sed cras ornare.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mattis vulputate enim nulla aliquet porttitor. Sed egestas egestas fringilla phasellus. Nisl vel pretium lectus quam id leo in vitae turpis. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Amet mauris commodo quis imperdiet massa. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Tellus rutrum tellus pellentesque eu tincidunt tortor. Non blandit massa enim nec dui nunc mattis enim. Etiam erat velit scelerisque in dictum non consectetur. Libero volutpat sed cras ornare.</p>
                    </Content>
                </About>
                <Resume id="resume">
                    <Content>
                        <ResumeContent />
                    </Content>
                    <SectionHeader>Résumé</SectionHeader>
                </Resume>
                <Contact id="contact">
                    <SectionHeader>Contact</SectionHeader>
                    <Content>
                        <p>The best way to reach me is by e-mail.</p>
                        <p>I am currently available for short term (3 months or less) or part time work only. There is no need to contact me regarding full time positions. If you have a smaller project or something not too time sensitive, I'd be happy to discuss working together.</p>
                        <IconRow>
                            <IoIosMail size="30px"/>
                            <a href="mailto:mikey@mikeygee.com" target="_blank">mikey@mikeygee.com</a>
                        </IconRow>
                        <IconRow>
                            <IoLogoLinkedin size="30px"/>
                            <a href="https://www.linkedin.com/in/michaelcgee" target="_blank">LinkedIn</a>
                        </IconRow>
                        <IconRow>
                            <IoLogoGithub size="30px"/>
                            <a href="https://github.com/mikeygee" target="_blank">mikeygee</a>
                        </IconRow>
                        <IconRow>
                            <IoLogoTwitter size="30px"/>
                            <a href="https://twitter.com/geeplusplus" target="_blank">geeplusplus</a>
                        </IconRow>
                    </Content>
                </Contact>
                <Blog id="blog">
                    <Content>
                        <BlogContainer>
                            {postPreviews}
                            <Archive>
                                <h2>&lt;Archive /&gt;</h2>
                                <ul>
                                    {archivePosts}
                                </ul>
                            </Archive>
                        </BlogContainer>
                    </Content>
                    <SectionHeader>Blog</SectionHeader>
                </Blog>
                <Footer />
            </div>
        );
    }
}

export const query = graphql`
{
    allMarkdownRemark(sort: {fields: fileAbsolutePath, order: DESC}, filter: {fileAbsolutePath: {regex: "/src\\/posts/"}}) {
        edges {
            node {
                excerpt(format: HTML, pruneLength: 2000)
                timeToRead
                frontmatter {
                    title
                }
                fields {
                    longDate
                    shortDate
                    slug
                }
            }
        }
    }
}
`;

export default Site;