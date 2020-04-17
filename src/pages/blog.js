import React from "react"
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

const Posts = styled.section`
    margin: 85px auto 40px;
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
    footer {
        font-family: ${fonts.sansSerif};
    }
`;

const Archive = styled.section`
    margin: 40px 0;
    h2 {
        font-family: ${fonts.monospace};
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
`;

const Separator = styled.hr`
    margin: 40px 0;
`;

const PostPreview = ({ fields = {}, excerpt, timeToRead, frontmatter = {} }) => {
    return (
        <Card>
            <h2><Link to={fields.slug}>{frontmatter.title}</Link></h2>
            <h4>{fields.longDate} <small>{timeToRead} min read</small></h4>
            <div dangerouslySetInnerHTML={{__html: excerpt}} />
            {
                timeToRead > 1 ? (
                    <Link to={fields.slug}>Continue reading...</Link>
                ) : null
            }
            <Separator />
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
                postPreviews.push(<PostPreview key={`post${i}`} {...node} />);
            }
        });
        return (
            <div>
                <GlobalStyles />
                <Header>
                    <div>
                        <span><MG link={true} to="/"/></span>
                        <NavLink as="span">Blog</NavLink>
                    </div>
                </Header>
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