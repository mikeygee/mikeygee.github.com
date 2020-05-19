import React from 'react'
import styled from 'styled-components';

import { MdMovie } from 'react-icons/md';
import {
    IoIosBook,
    IoIosMic,
    IoIosMusicalNotes,
    IoIosRestaurant,
    IoIosTrendingUp,
    IoIosTrophy,
    IoIosTv,
} from 'react-icons/io';

import HeadshotImg from '../images/headshotbw.png';

import { convertLinks } from '../utils';

import {
    SectionSubHeader,
} from './index';


const IMDB_PREFIX = 'https://www.imdb.com/title/';
const YFINANCE_PREFIX = 'https://finance.yahoo.com/quote/';
const SPOTIFY_PREFIX = 'https://open.spotify.com/';
const AMAZON_PREFIX = 'https://amzn.com/';
const SPOTIFY_PLAYLIST = 'https://embed.spotify.com/?uri=spotify:user:geeplusplus:playlist:4zDFe7Bk8TALE71x3s4OpB';

const FAVORITES_DATA = [
    {
        title: 'Movies',
        icon: MdMovie,
        list: [
            `[Pulp Fiction](${IMDB_PREFIX}tt0110912)`,
            `[Memento](${IMDB_PREFIX}tt0209144)`,
            `[Serenity](${IMDB_PREFIX}tt0379786)`,
            `[Ocean's 11](${IMDB_PREFIX}tt0240772)`,
            `[Inglourious Basterds](${IMDB_PREFIX}tt0361748)`,
            `[Office Space](${IMDB_PREFIX}tt0151804)`,
            `[Harold and Kumar Go To White Castle](${IMDB_PREFIX}tt0366551)`,
            `[Happy Gilmore](${IMDB_PREFIX}tt0116483)`,
            `[Monsters Inc](${IMDB_PREFIX}tt0198781)`,
            `[Tangled](${IMDB_PREFIX}tt0398286)`,
            `[Wreck It Ralph](${IMDB_PREFIX}tt1772341)`,
            `[Vertigo](${IMDB_PREFIX}tt0052357)`
        ]
    },
    {
        title: 'Shows',
        icon: IoIosTv,
        list: [
            `[Firefly](${IMDB_PREFIX}tt0303461)`,
            `[The Wire](${IMDB_PREFIX}tt0306414)`,
            `[Breaking Bad](${IMDB_PREFIX}tt0903747)`,
            `[Game of Thrones](${IMDB_PREFIX}tt0944947)`,
            `[The Office](${IMDB_PREFIX}tt0386676)`,
            `[Fargo](${IMDB_PREFIX}tt2802850)`,
            `[Black Mirror](${IMDB_PREFIX}tt2085059)`,
            `[Buffy the Vampire Slayer](${IMDB_PREFIX}tt0118276)`,
            `[Angel](${IMDB_PREFIX}tt0162065)`,
            `[Curb Your Enthusiasm](${IMDB_PREFIX}tt0264235)`,
            `[The League](${IMDB_PREFIX}tt1480684)`,
            `[It's Always Sunny in Philadelphia](${IMDB_PREFIX}tt0472954)`,
            `[Rick and Morty](${IMDB_PREFIX}tt2861424)`,
            `[Better Call Saul](${IMDB_PREFIX}tt3032476)`,
            `[Survivor](${IMDB_PREFIX}tt0239195)`,
        ]
    },
    {
        title: 'Music',
        icon: IoIosMusicalNotes,
        list: [
            `[Muse](${SPOTIFY_PREFIX}artist/12Chz98pHFMPJEknJQMWvI)`,
            `[Phantogram](${SPOTIFY_PREFIX}artist/1l9d7B8W0IHy3LqWsxP2SH)`,
            `[BØRNS](${SPOTIFY_PREFIX}artist/1KP6TWI40m7p3QBTU6u2xo)`,
            `[The Raconteurs](${SPOTIFY_PREFIX}artist/4wo1267SJuUfHgasdlfNfc)`,
            `[Weezer](${SPOTIFY_PREFIX}artist/3jOstUTkEu2JkjvRdBA5Gu)`,
            `[fun](${SPOTIFY_PREFIX}artist/5nCi3BB41mBaMH9gfr6Su0)`,
            `[Fiona Apple](${SPOTIFY_PREFIX}artist/3g2kUQ6tHLLbmkV7T4GPtL)`,
            `[Regina Spektor](${SPOTIFY_PREFIX}artist/3z6Gk257P9jNcZbBXJNX5i)`,
            `[Rilo Kiley](${SPOTIFY_PREFIX}artist/2cevwbv7ISD92VMNLYLHZA)`,
            `[The Beatles](${SPOTIFY_PREFIX}artist/3WrFJ7ztbogyGnTHbHJFl2)`,
        ]
    },
    {
        title: 'Podcasts',
        icon: IoIosMic,
        list: [
            `[The Bill Simmons Podcast](${SPOTIFY_PREFIX}show/07SjDmKb9iliEzpNcN2xGD)`,
            `[Laker Film Room](${SPOTIFY_PREFIX}show/3GLZS643oOSWRo9e6DOVwV)`,
            `[Revisionist History](${SPOTIFY_PREFIX}show/2LOJaYKijiwNefCvzczyib)`,
            `[The Tim Ferriss Show](${SPOTIFY_PREFIX}show/5qSUyCrk9KR69lEiXbjwXM)`,
            `[Joe Rogan Experience](http://podcasts.joerogan.net/)`,
            `[Naval](${SPOTIFY_PREFIX}show/7qZAVw03FuurfYnWIWwkHY)`,
            `[The Mindful Kind](${SPOTIFY_PREFIX}show/5O5tlazpUSpflbc1jAY0ci)`,
            `[What Bitcoin Did](${SPOTIFY_PREFIX}show/0mWUJuONiilW5JSBBFZ0s7)`,
            `[The Pomp Podcast](${SPOTIFY_PREFIX}show/2QwpFjzJ0ZteqmMqw2xIfA)`,
            `[Stephan Livera Podcast](${SPOTIFY_PREFIX}show/3mFUF9kSYpvrCGWLbskRr8)`,
            `[Invest Like the Best](${SPOTIFY_PREFIX}show/22fi0RqfoBACCuQDv97wFO)`,
            `[We Study Billionaires](${SPOTIFY_PREFIX}show/28RHOkXkuHuotUrkCdvlOP)`,
            `[Binge Mode](${SPOTIFY_PREFIX}show/6u8aqT4yaqnXiAwSHQP0NN)`,
        ]
    },
    {
        title: 'Books',
        icon: IoIosBook,
        list: [
            `[Sapiens](${AMAZON_PREFIX}0062316117)`,
            `[Awareness](${AMAZON_PREFIX}0385249373)`,
            `[Atomic Habits](${AMAZON_PREFIX}0735211299)`,
            `[The Life-changing Magic of Tidying Up](${AMAZON_PREFIX}1607747308)`,
            `[Waking Up](${AMAZON_PREFIX}1451636024)`,
            `[The 4 Hour Work Week](${AMAZON_PREFIX}0307465357)`,
            `[How to Stop Worrying and Start Living](${AMAZON_PREFIX}9388423380)`,
            `[Antifragile](${AMAZON_PREFIX}0812979680)`,
            `[The Bitcoin Standard](${AMAZON_PREFIX}1119473861)`,
            `[The Internet of Money](${AMAZON_PREFIX}1537000454)`,
            `[The Book of Basketball](${AMAZON_PREFIX}0345520106)`,
        ]
    },
    {
        title: 'Teams',
        icon: IoIosTrophy,
        list: [
            '[Lakers](https://www.nba.com/lakers)',
            '[Kings](https://www.nhl.com/kings)',
            '[Dodgers](https://www.mlb.com/dodgers)',
            '[UCLA Bruins](https://uclabruins.com)',
        ]
    },
    {
        title: 'Stocks',
        icon: IoIosTrendingUp,
        list: [
            `[AAPL](${YFINANCE_PREFIX}AAPL)`,
            `[AMZN](${YFINANCE_PREFIX}AMZN)`,
            `[MSFT](${YFINANCE_PREFIX}MSFT)`,
            `[GOOG](${YFINANCE_PREFIX}GOOG)`,
            `[FB](${YFINANCE_PREFIX}FB)`,
            `[NVDA](${YFINANCE_PREFIX}NVDA)`,
            `[TSLA](${YFINANCE_PREFIX}TSLA)`,
            `[COST](${YFINANCE_PREFIX}COST)`,
            `[VZ](${YFINANCE_PREFIX}VZ)`,
            `[DIS](${YFINANCE_PREFIX}DIS)`,
            `[BABA](${YFINANCE_PREFIX}BABA)`,
        ]
    },
    {
        title: 'Food',
        icon: IoIosRestaurant,
        list: [
            '[Sugarfish](https://sugarfishsushi.com)',
            '[Chick-Fil-A](https://www.chick-fil-a.com)',
            '[Hop Li](https://hoplirestaurant.com/)',
            '[IHOP](https://www.ihop.com)',
            `[Jersey Mike's](https://www.jerseymikes.com)`,
            `[Trader Joe's](https://www.traderjoes.com)`,
            '[Costco](https://www.costco.com)',
        ]
    },
];

const IconRow = styled.div`
    display: flex;
    align-items: center;
    margin: 1em 0;
    font-size: 0.8em;
    > div:first-child {
        margin-right: 1.25em;
    }
    > ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        > li {
            display: inline-block;
            margin: 0 0.25em;
            > span:nth-child(2) {
                margin-left: 0.5em;
            }
        }
    }
`;

const AboutContent = styled.div`
    > blockquote {
        margin-bottom: 3em;
    }
`;

const CenteredBlock = styled.div`
    text-align: center;
`;

const EmojiContainer = styled(CenteredBlock)`
    font-size: 2em;
`;

export default () => (
    <AboutContent>
        <CenteredBlock><img src={HeadshotImg} alt="Mikey Gee headshot" /></CenteredBlock>
        <p>Hello! I'm Mikey Gee, a software engineer by trade, and a lifelong resident of Los Angeles, California.</p>
        <p>I discovered computer programming in high school, and knew right away I had found my calling. There is something magical about writing code and watching it work that fascinates me more than anything else. I currently specialize in front end development with the React ecosystem.</p>
        <p>My other interests include sports (basketball, running, cycling, snowboarding / skiing), mindfulness, nature, animals, reading (non-fiction), movies / shows, investing, homes, and ₿itcoin.</p>
        <p>I believe a healthy body and mind are the keys to making the most of our short lives. My top priorities each day are exercise, meditation, and reading. Politically, I believe that individual freedom and non-aggression are the principles that lead to the best possible large scale societies.</p>
        <blockquote>
            <i>
            Do you want to change the world? How about beginning with yourself? How about being transformed yourself first? But how do you achieve that? Through observation. Through understanding. With no interference or judgment on your part. Because what you judge, you cannot understand.
            <p>What you are aware of you are in control of; what you are not aware of is in control of you.</p>
            </i>
            <p>Anthony De Mello</p>
        </blockquote>
        <blockquote>
            <i><a href="https://www.youtube.com/watch?v=KmDYXaaT9sA&t=16m21s" target="_blank" rel="noopener noreferrer">Work hard, be kind, and amazing things will happen.</a></i>
            <p>Conan O'Brien</p>
        </blockquote>
        <EmojiContainer>
            <span role="img" aria-label="laptop">💻</span>
            <span role="img" aria-label="basketball">🏀</span>
            <span role="img" aria-label="cycling">🚴‍♂️</span>
            <span role="img" aria-label="run">🏃‍♂️</span>
            <span role="img" aria-label="snowboard">🏂</span>
            <span role="img" aria-label="mountain">🏔</span>
            <span role="img" aria-label="cat">🐈</span>
            <span role="img" aria-label="meditate">🧘‍♂️</span>
            <span role="img" aria-label="book">📖</span>
            <span role="img" aria-label="movie">🎬</span>
            <span role="img" aria-label="tv">📺</span>
            <span role="img" aria-label="finance">📈</span>
            <span role="img" aria-label="home">🏠</span>
        </EmojiContainer>
        <SectionSubHeader>Favorites</SectionSubHeader>
        {
            FAVORITES_DATA.map(({ icon: Icon, list, title }, i) => (
                <IconRow key={`favorite${i}`}>
                    <div><Icon size="4em" /></div>
                    <ul>
                    {
                        list.map((item, j) => (
                            <li key={`${title + j}`}>
                                <span dangerouslySetInnerHTML={{__html: convertLinks(item)}} />
                                {
                                    j === (list.length - 1) ? null : (
                                        <span>&bull;</span>
                                    )
                                }
                            </li> 
                        ))
                    }
                    </ul>
                </IconRow>
            ))
        }
        <SectionSubHeader>Playlist</SectionSubHeader>
        <iframe src={SPOTIFY_PLAYLIST} title="Spotify playlist" width="280" height="380" frameborder="0" allowtransparency="true"></iframe>
    </AboutContent>
);