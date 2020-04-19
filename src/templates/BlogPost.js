import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';

import { colors, fonts, breakpoints, GlobalStyles } from '../styles';

import {
    Footer
} from '../pages/index';

import {
    BlogHeader,
    Posts,
    Post
} from '../pages/blog';

class BlogPost extends React.Component {
    render() {
        const { data } = this.props;
        const { markdownRemark } = data;
        return (
            <div>
                <GlobalStyles />
                <BlogHeader />
                <Posts>
                    <Post {...markdownRemark} />
                    <Footer />
                </Posts>
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