import React from 'react'
import styled from 'styled-components';

import { colors, breakpoints } from '../styles';

import YSportsLogo from '../images/ysports.png';
import OULogo from '../images/ou.png';
import BlinktagLogo from '../images/blinktag.png';
import AmgenLogo from '../images/amgen.png';
import WDILogo from '../images/wdi.png';
import UCLALogo from '../images/ucla.jpg';
import UCLAScriptLogo from '../images/ucla.png';
import CourseraLogo from '../images/coursera.jpeg';
import LABLogo from '../images/lab.jpg';

import { GrBitcoin } from 'react-icons/gr';
import { AiFillRobot } from 'react-icons/ai';
import { IoIosStarOutline, IoIosStarHalf, IoIosStar } from 'react-icons/io';

import { CenteredRow, SectionSubHeader } from './index';

const IMAGE_WIDTH = 80;
const BlinktagLogoImage = styled.img`
    background-color: ${colors.bgInverse};
    width: ${IMAGE_WIDTH}px;
`;
const BitcoinLogo = styled(GrBitcoin)`
    color: #ee963a;
`;
const StyledMG = styled(CenteredRow)`
    background-color: ${colors.bgInverse};
    width: ${IMAGE_WIDTH}px;
    height: ${IMAGE_WIDTH}px;
    font-size: 36px;
    font-weight: bold;
    span:first-child {
        color: ${colors.textAccent1};
    }
    span:nth-child(2) {
        color: ${colors.textAccent2};
    }
`;

const MGLogo = <StyledMG><span>M</span><span>G</span></StyledMG>;

const ResumeSection = styled.div`
    margin-bottom: 2em;
`;

const ResumeItem = styled.div`
    display: flex;
    flex-direction: row;
    margin: 2em 0;
    small {
        color: ${colors.textSecondary};
    }
    img {
        width: 80px;
    }
    > div:first-child {
        text-align: center;
    }
    > div:nth-child(2) {
        margin-left: 20px;
        h3 {
            font-size: 1em;
        }
        h3, h4 {
            margin: 0;
        }
        h4 {
            font-weight: normal;
            small {
                margin-left: 4px;
            }
        }
        ul {
            margin: 4px 0 0;
            padding-left: 16px;
            list-style-type: circle;
            font-size: 0.8em;
        }
    }
`;

const RESUME_DATA = [
    {
        title: 'Work',
        items: [
            {
                title: 'Software Engineer',
                company: '[Yahoo Sports](https://sports.yahoo.com)',
                image: YSportsLogo,
                alt: 'Yahoo Sports logo',
                location: 'Playa Vista, CA',
                dates: '2013-2019',
                description: [
                    'Front end development for [Yahoo Sports](https://sports.yahoo.com) and [Yahoo Fantasy](https://sports.yahoo.com/fantasy)',
                    'Worked on several web and native applications, including [Daily Fantasy](https://sports.yahoo.com/dailyfantasy), [Yahoo Sports](https://mobile.yahoo.com/sports) and [Yahoo Fantasy](https://mobile.yahoo.com/fantasy) mobile apps, [Pro](https://football.fantasysports.yahoo.com/pickem) and [College](https://football.fantasysports.yahoo.com/college) Football Pickem, [Survival Football](https://football.fantasysports.yahoo.com/survival), [Fantasy Slate](https://sports.yahoo.com/fantasyslate), Fantasy Live Drafts, and internal admin tools.',
                    'Worked with mostly [Node.js](https://nodejs.org) and [php](https://www.php.net) server frameworks, with [React](https://reactjs.org), [React Native](https://reactnative.dev), [Redux](https://redux.js.org), [Fluxible](https://fluxible.io), and [Atomic CSS](https://acss.io) on the client.',
                ]
            },
            {
                title: 'Front End Web Developer',
                company: '[OmniUpdate](https://omniupdate.com)',
                image: OULogo,
                alt: 'OmniUpdate logo',
                location: 'Camarillo, CA',
                dates: '2011-2013',
                description: [
                    'Lead front end engineer for the OU Campus content management system',
                    'Re-architected and redesigned OU Campus from a JSP app to a single page application, using [Backbone.js](https://backbonejs.org), [Handlebars](http://handlebarsjs.com) templates, and [Bootstrap](https://getbootstrap.com) based theme',
                ]
            },
            {
                title: 'Consultant',
                company: '[Blinktag](https://blinktag.com)',
                imageComponent: <BlinktagLogoImage src={BlinktagLogo} alt="Blinktag logo" />,
                location: 'San Francisco, CA',
                dates: '2011-2012',
                description: [
                    `Implemented JavaScript page flipper for interactive children's book on [511 Contra Costa](https://511contracosta.org/schools) web site`,
                    'Worked on a trip rate generator with [Wordpress](https://wordpress.org)/[php](https://www.php.net)/[jQuery](https://jquery.com)',
                ]
            },
            {
                title: 'Senior Associate IS Analyst',
                company: '[Amgen](https://amgen.com)',
                image: AmgenLogo,
                alt: 'Amgen logo',
                location: 'Thousand Oaks, CA',
                dates: '2006-2011',
                description: [
                    'Data integration and warehousing / Business intelligence',
                    '[Informatica PowerCenter](https://www.informatica.com/products/data-integration/powercenter.html) Developer and Administrator',
                    'Dimensional modeling, ETL development, operations, and support',
                ]
            },
            {
                title: 'Student Technician',
                company: '[UCLA College Information Services](http://uit.ucla.edu)',
                image: UCLALogo,
                alt: 'UCLA logo',
                location: 'Los Angeles, CA',
                dates: '2003-2006',
                description: [
                    'Technical support for administrative staff and [MyUCLA](https://my.ucla.edu) web portal',
                    'PC maintenance and repair',
                    'Front desk reception services',
                ]
            },
            {
                title: 'Undergraduate Intern',
                company: '[Walt Disney Imagineering](https://waltdisneyimagineering.com)',
                image: WDILogo,
                alt: 'Walt Disney Imagineering logo',
                location: 'Anaheim, CA',
                dates: '2004',
                description: [
                    'Audio / video engineering',
                    'Created a MS Access database application to keep track of Disneyland CCTV cameras including sample images and video clips',
                    'Audio capture from Disneyland attractions to ensure safe volume levels',
                ]
            },
        ]
    },
    {
        title: 'Projects',
        items: [
            {
                title: '[BIP39 Mnemonic Builder](https://mikeygee.com/bip39)',
                imageComponent: <BitcoinLogo size={`${IMAGE_WIDTH}px`} />,
                dates: '2019',
                description: [
                    'Web app for generating and customizing BIP39 mnemonic seed phrases used for creating and/or recovering a Bitcoin deterministic wallet',
                    'Built with [Gatsby](https://www.gatsbyjs.org) and [Styled Components](https://styled-components.com/)',
                ]
            },
            {
                title: 'mikeygee.com',
                imageComponent: MGLogo,
                dates: '2011-2020',
                description: [
                    'The web site you are looking at right now',
                    'Initially built with [Jekyll](https://jekyllrb.com), now converted to [Gatsby](https://www.gatsbyjs.org)',
                ]
            },
            {
                title: '[RoboTag](https://mikeygee.com/RoboTag)',
                imageComponent: <AiFillRobot size={`${IMAGE_WIDTH}px`} />,
                dates: '2011',
                description: [
                    'Proof of concept, head to head AI strategy game for programmers',
                    'Currently runs client side only with JavaScript, hoping to graduate out of proof of concept someday'
                ]
            },
        ]
    },
    {
        title: 'Skills',
        items: [
            {
                title: 'Advanced level',
                imageComponent: <IoIosStar size={`${IMAGE_WIDTH}px`} />,
                description: [
                    'JavaScript, HTML, CSS',
                    '[React](https://reactjs.org), [React Native](https://reactnative.dev), [Redux](https://redux.js.org), [Backbone.js](https://backbonejs.org), [jQuery](https://jquery.com)',
                    '[vim](https://www.vim.org), MacOS'
                ],
            },
            {
                title: 'Intermediate',
                imageComponent: <IoIosStarHalf size={`${IMAGE_WIDTH}px`} />,
                description: [
                    'php, Java, SQL',
                    '[Node.js](https://nodejs.org), [Fluxible](https://fluxible.io), [Atomic CSS](https://acss.io), [Styled Components](https://styled-components.com/), [Gatsby](https://www.gatsbyjs.org), [graphql](https://graphql.org), [Dust.js](https://www.dustjs.com), [Handlebars.js](http://handlebarsjs.com), [YUI](https://yuilibrary.com), [Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools), [Jest](https://jestjs.io), [Mocha](https://mochajs.org), [Enzyme](https://enzymejs.github.io/enzyme), [Selenium](https://www.selenium.dev), [Protractor](https://www.protractortest.org), [Screwdriver](https://screwdriver.cd), [Microsoft App Center](https://appcenter.ms), [Informatica Powercenter](https://www.informatica.com/products/data-integration/powercenter.html)',
                    '[git](https://git-scm.com), [VSCode](https://code.visualstudio.com), [Atom](https://atom.io), [Virtual Box](https://www.virtualbox.org), Unix/Linux', 
                ],
            },
            {
                title: 'Basics / Prior experience',
                imageComponent: <IoIosStarOutline size={`${IMAGE_WIDTH}px`} />,
                description: [
                    'C/C++, Objective-C, Swift, XML/XSL',
                    '[webpack](https://webpack.js.org), [babel](https://babeljs.io), [Storybook](https://storybook.js.org), [Jekyll](https://jekyllrb.com)',
                    '[Xcode](https://developer.apple.com/xcode), [Android Studio](https://developer.android.com/studio), [MySQL](https://www.mysql.com), [MongoDB](https://www.mongodb.com), Windows'
                ],
            },
        ]
    },
    {
        title: 'Education',
        items: [
            {
                title: '[University of California, Los Angeles](https://ucla.edu)',
                image: UCLAScriptLogo,
                dates: '2002-2006',
                description: [
                    'B.S. Computer Science',
                    'GPA: 3.28',
                ]
            },
            {
                title: '[Coursera](https://www.coursera.org)',
                image: CourseraLogo,
                dates: '2012',
                description: [
                    '[Human computer interaction](/hci.pdf)',
                    '[Gamification](/gamification.pdf)',
                ]
            },
            {
                title: '[Los Angeles Baptist Jr/Sr High School](https://heritage-schools.org)',
                image: LABLogo,
                dates: '1997-2002',
                description: [
                    'GPA: 4.0',
                    'Class of 2002 Valedictorian',
                    'Varsity cross country, track & field, and basketball',
                ]
            },
        ]
    },
];

function convertLinks (str = '') {
    const links = str.match(/\[[\w\s./,]+\]\([\w:/.-]+\)/g);
    let text;
    let href;
    if (links) {
        links.forEach((link) => {
            text = link.match(/\[([\w\s./,]+)\]/);
            href = link.match(/\(([\w:/.-]+)\)/);
            str = str.replace(link, `<a href="${href[1]}" target="_blank" rel="noopener noreferrer">${text[1]}</a>`);
        });
        return str;
    }
    return str;
}

export default () => (
    <div>
    {
        RESUME_DATA.map((section) => {
            const sectionTitle = section.title;
            return (
                <ResumeSection key={`section${sectionTitle}`}>
                    <SectionSubHeader>{sectionTitle}</SectionSubHeader>
                    {
                        (section.items || []).map((item, i) => {
                            let { image, imageComponent, alt, title, dates, description, company } = item;
                            if (image) {
                                imageComponent = <img src={image} alt={alt} />;
                            }
                            return (
                                <ResumeItem key={`${sectionTitle}Item${i}`}>
                                    <div>
                                        {imageComponent}
                                        { dates ? (
                                            <div><small>{dates}</small></div>
                                        ) : null}
                                    </div>
                                    <div>
                                        <h3 dangerouslySetInnerHTML={{__html: convertLinks(title)}} />
                                        { company ? (
                                            <h4 dangerouslySetInnerHTML={{__html: convertLinks(company)}} />
                                        ) : null }
                                        <ul>
                                        {
                                            description.map((bullet, j) => (
                                                <li key={`${sectionTitle}Item${i}Bullet${j}`} dangerouslySetInnerHTML={{__html: convertLinks(bullet)}} />
                                            ))
                                        }
                                        </ul>
                                    </div>
                                </ResumeItem>
                            );
                        })
                    }
                </ResumeSection>
            );
        })
    }
    </div>
)