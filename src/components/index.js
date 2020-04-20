import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';

import { colors, breakpoints, fonts } from '../styles';

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

const StyledPost = styled.div`
    line-height: 1.45;
    margin-bottom: 40px;
    h2 { font-size: 1.5em; }
    h4 { font-size: 1.2em; }
    blockquote {
        padding: 0 1em;
        border-left: .25em solid ${colors.quoteBorder};
    }
    small {
        color: ${colors.textSecondary};
        margin-left: 4px;
    }
    pre {
        overflow: hidden;
    }
    code {
        white-space: pre-wrap;
    }
    iframe[src*=youtube] {
        width: 100%;
        height: 57vw;
        max-height: 383px;
    }
`;

const Separator = styled.hr`
    margin: 40px 0;
`;

export const BlogContainer = styled.section`
    margin: 0 auto;
    max-width: 680px;
    font-family: ${fonts.serif};
    a {
        color: ${colors.link};
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`;

export const PostContainer = styled(BlogContainer)`
    margin: 65px auto 20px;
    max-width: 720px;
    padding: 0 20px;
`;

export const Post = ({ fields = {}, excerpt, timeToRead, frontmatter = {}, isPreview, html }) => {
    const title = isPreview ? (
        <Link to={fields.slug}>{frontmatter.title}</Link>
    ) : frontmatter.title;
    const postFooter = isPreview ? (
        <div>
            { timeToRead > 1 ? (
                <Link to={fields.slug}>Continue reading...</Link>
            ) : null }
            <Separator />
        </div>
    ) : null;
    const content = isPreview ? excerpt : html;
    return (
        <StyledPost>
            <h2>{title}</h2>
            <h4>{fields.longDate} <small>{timeToRead} min read</small></h4>
            <div dangerouslySetInnerHTML={{__html: content}} />
            {postFooter}
        </StyledPost>
    );
};

export const Archive = styled.section`
    margin: 40px 0;
    h2 {
        font-family: ${fonts.monospace};
        font-weight: normal;
    }
    ul {
        margin: 0;
        padding: 0;
        > li {
            display: flex;
            flex-direction: row;
            > div {
                min-width: 110px;
            }
        }
    }
`;

export const ArchivePost = ({ fields = {}, frontmatter = {} }) => (
    <li>
        <div>{fields.shortDate}</div>
        <div><Link to={fields.slug}>{frontmatter.title}</Link></div>
    </li>
);

export const Footer = () => (
    <footer>© 2020 Mikey Gee</footer>
);
