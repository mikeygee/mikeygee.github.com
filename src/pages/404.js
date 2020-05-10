import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';

import { Home } from '.';
import { Nav, Footer } from '../components';

import { colors, GlobalStyles } from '../styles';

const Styled404 = styled(Home)`
    justify-content: space-between;
    h1 {
        color: ${colors.textAccent1};
        font-size: 3em;
    }
    p {
        text-align: center;
    }
`;

export default () => (
    <Styled404>
        <GlobalStyles />
        <Nav />
        <div></div>
        <div>
            <h1>404: Page not found</h1>
            <p>Sorry! This page may have moved or no longer exists.</p>
            <p><Link to="/">Return home</Link></p>
        </div>
        <Footer />
    </Styled404>
);