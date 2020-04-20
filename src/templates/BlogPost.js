import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import { GlobalStyles } from '../styles';

import {
    Nav,
    PostContainer,
    Post,
    Footer
} from '../components';

class BlogPost extends React.Component {
    render() {
        const { data } = this.props;
        const { markdownRemark } = data;
        return (
            <div>
                <GlobalStyles />
                <Nav />
                <PostContainer>
                    <Post {...markdownRemark} />
                </PostContainer>
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