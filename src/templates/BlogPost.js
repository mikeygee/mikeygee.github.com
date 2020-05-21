import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import { GlobalStyles, breakpoints } from '../styles';

import { Nav, BlogContainer, Post, Footer } from '../components';

const Container = styled.div`
    min-height: calc(100vh - 113px);
    padding: 0 2em;
    margin-top: 65px;
    @media (${breakpoints.phone}) {
        min-height: calc(100vh - 109px);
    }
`;

class BlogPost extends React.Component {
    render() {
        const { data } = this.props;
        const { markdownRemark } = data;
        return (
            <div>
                <Helmet>
                    <title>
                        Mikey Gee | {markdownRemark.frontmatter.title}
                    </title>
                </Helmet>
                <Nav />
                <Container>
                    <GlobalStyles />
                    <BlogContainer>
                        <Post {...markdownRemark} />
                    </BlogContainer>
                </Container>
                <Footer />
            </div>
        );
    }
}

export const query = graphql`
    query($id: String!) {
        markdownRemark(id: { eq: $id }) {
            fields {
                longDate
            }
            frontmatter {
                title
            }
            html
            timeToRead
        }
    }
`;

export default BlogPost;
