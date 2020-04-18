import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';

import { colors, fonts, breakpoints } from '../styles';

import {
    GlobalStyles,
    MG,
    NavLink,
    Footer
} from './index';

const PREVIEW_LIMIT = 10;

const Header = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: ${colors.bgInverse};
    padding: 12px 20px;
    > div {
        margin: 0 auto;
        max-width: 680px;
        > span {
            margin-right: 16px;
        }
    }
`;

export const Posts = styled.section`
    margin: 65px auto 20px;
    max-width: 720px;
    padding: 0 20px;
    font-family: ${fonts.serif};
    a {
        color: ${colors.link};
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
    pre {
        background-color: ${colors.bgSecondary};
        padding: 14px;
    }
    code {
        font-family: ${fonts.monospace};
        font-size: 12px;
        white-space: pre-wrap;
    }
    footer {
        font-family: ${fonts.sansSerif};
    }
`;

const Archive = styled.section`
    margin: 40px 0;
    h2 {
        font-family: ${fonts.monospace};
        font-weight: normal;
    }
    ul {
        margin: 0;
        padding: 0;
        > li {
            display: block;
            span {
                display: inline-block;
                min-width: 110px;
            }
        }
    }
`;

const Card = styled.div`
    line-height: 1.45;
    small {
        color: ${colors.textSecondary};
        margin-left: 4px;
    }
    margin-bottom: 40px;
`;

const Separator = styled.hr`
    margin: 40px 0;
`;

export const BlogHeader = () => (
    <Header>
        <div>
            <span><MG link={true} to="/"/></span>
            <NavLink as="span">Blog</NavLink>
        </div>
    </Header>
); 

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
        <Card>
            <h2>{title}</h2>
            <h4>{fields.longDate} <small>{timeToRead} min read</small></h4>
            <div dangerouslySetInnerHTML={{__html: content}} />
            {postFooter}
        </Card>
    );
};

const ArchivePost = ({ fields = {}, frontmatter = {} }) => (
    <li>
        <span>{fields.shortDate}</span>
        <Link to={fields.slug}>{frontmatter.title}</Link>
    </li>
);

class Blog extends React.Component {
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
                <BlogHeader />
                <Posts>
                    {postPreviews}
                    <Archive>
                        <h2>&lt;Archive /&gt;</h2>
                        <ul>
                            {archivePosts}
                        </ul>
                    </Archive>
                    <Footer />
                </Posts>
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

export default Blog;