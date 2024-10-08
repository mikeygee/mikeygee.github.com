import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

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
    <StyledHomeLogo as={to ? Link : null} to={to} onClick={onClick}>
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

export class NavLink extends React.Component {
    handleClick = e => {
        const { isRoot, to } = this.props;
        if (isRoot) {
            e.preventDefault();
            const target = document.querySelector(`#${to}`);
            window.scrollTo({ top: target.offsetTop - 45, behavior: 'smooth' });
        }
    };
    render() {
        const { isRoot, to, children } = this.props;
        const href = `${isRoot ? '' : '/'}#${to}`;
        return (
            <a href={href} onClick={this.handleClick}>
                {children}
            </a>
        );
    }
}

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

const StyledPost = styled.div`
    line-height: 1.45;
    margin-bottom: 40px;
    h2 {
        font-size: 1.5em;
    }
    h4 {
        font-size: 1.2em;
    }
    small {
        color: ${colors.textSecondary};
        margin-left: 0.25em;
    }
    pre {
        overflow: hidden;
    }
    code {
        white-space: pre-wrap;
    }
    iframe[src*='youtube'] {
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
`;

export const Post = ({
    fields = {},
    excerpt,
    timeToRead,
    frontmatter = {},
    isPreview,
    html,
}) => {
    const title = isPreview ? (
        <Link to={fields.slug}>{frontmatter.title}</Link>
    ) : (
        frontmatter.title
    );
    const postFooter = isPreview ? (
        <div>
            {timeToRead > 1 ? (
                <Link to={fields.slug}>Continue reading...</Link>
            ) : null}
            <Separator />
        </div>
    ) : null;
    const content = isPreview ? excerpt : html;
    return (
        <StyledPost>
            <h2>{title}</h2>
            <h4>
                {fields.longDate} <small>{timeToRead} min read</small>
            </h4>
            <div dangerouslySetInnerHTML={{ __html: content }} />
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
                @media (${breakpoints.phone}) {
                    min-width: 95px;
                }
            }
        }
    }
`;

export const ArchivePost = ({ fields = {}, frontmatter = {} }) => (
    <li>
        <div>{fields.shortDate}</div>
        <div>
            <Link to={fields.slug}>{frontmatter.title}</Link>
        </div>
    </li>
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
        <span>© 2024 Mikey Gee</span>
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
