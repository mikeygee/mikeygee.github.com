import { createGlobalStyle } from 'styled-components';

// color pallete
const pink = '#f92672';
const purple = '#ae81ff';
const blue = '#66d9ef';
const green = '#a6e22e';
const yellow = '#e6db74';
const orange = '#fd971f';
const grayLightest = '#f5f5f5';
const grayLighter = '#eee';
const grayLight = '#ddd';
const grayMedium = '#777';
const grayDark = '#292929';
const white = '#fff';
const dimmed = 'rgba(0, 0, 0, 0.65)';

export const colors = {
    bgPrimary: white,
    bgSecondary: grayLighter,
    bgSection1: yellow,
    bgSection2: green,
    bgSection3: orange,
    bgSection4: purple,
    bgAccent: blue,
    bgSelected: blue,
    bgInverse: grayDark,
    bgHover: grayLight,
    bgOverlay: dimmed,
    borderPrimary: grayLight,
    textPrimary: grayDark,
    textSecondary: grayMedium,
    textAccent1: pink,
    textAccent2: purple,
    textAccent3: blue,
    textAccent4: yellow,
    textAccent5: green,
    textAccent6: orange,
    textInverse: grayLightest,
    quoteBorder: grayLight,
    link: pink,
    linkInverse: blue,
    linkHover: yellow,
};

export const breakpoints = {
    phone: 'max-width: 560px',
    tablet: 'max-width: 800px',
};

export const fonts = {
    sansSerif: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    serif: "Charter, Georgia, 'Times New Roman', serif",
    monospace: "Menlo, Consolas, 'Courier New', monospace"
};

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        font-family: ${fonts.sansSerif};
        box-sizing: border-box;
        *, *:before, *:after
        {
            box-sizing: inherit;
        }
        color: ${colors.textPrimary};
        @media (${breakpoints.phone}) {
            font-size: 13px;
        }
        footer {
            text-align: center;
            font-size: 13px;
            padding: 16px;
            background-color: ${colors.bgSecondary};
            border-top: 1px solid ${colors.borderPrimary};
        }
    }
`;