import { useState } from 'react';
import './About.scss';
import PaperItem from './PaperItem';

const paperItems = [
    {
        start: <div className='PaperItem_start'>
            <span className='PaperItem_header_xxl PaperItem_start_startTitle'>
                HEY!
            </span>
            <span class="stretch-helper" />
            <br />
            <span className='PaperItem_header_xxl PaperItem_start_don'>
                I’M DON
            </span>
            <span class="stretch-helper" />
            <br />
            <span className='PaperItem_header_xxl PaperItem_start_meet'>
                NICE TO MEET YOU.
            </span>
            <img src="/img/clickToOpen.webp" alt="" />
        </div>,
    },
    {
        header: 
        <div className='PaperItem_header'>
            <span className='PaperItem_header_xxl PaperItem_header__title'>
                THE DARING
            </span>
            <span class="stretch-helper" />
            <br />
            <span className='PaperItem_header_xxl PaperItem_header__title2'>
            DUCK OF THE 
            </span>
            <span class="stretch-helper" />
            <br />
            <span className='PaperItem_header_xxl PaperItem_header__title3'>
            TON ECOSYSTEM
            </span>
            <span class="stretch-helper" />
            <div className='PaperItem_header_line'></div>
        </div>,
        text: <div className='PaperItem_header_description finlandica'>
            We ducks have been part of Telegram for a while, but now it's time to show our true power. I'm here to lead the duck vanguard and help TON reach the top of crypto.
        </div>
    },
    {
        img: '/img/paper1.webp'
    },
    {
        header: <div className='PaperItem_header'>
                    <span className='PaperItem_header_xxl PaperItem_header__title4'>
                        FROM an iinocent
                    </span>
                    <span class="stretch-helper" />
                    <br />
                    <span className='PaperItem_header_xxl PaperItem_header__title'>
                        STICKER to
                    </span>
                    <span class="stretch-helper" />
                    <br />
                    <span className='PaperItem_header_xxl PaperItem_header__title4'>
                        A REBEL DUCKLING
                    </span>
                    <span class="stretch-helper" />
                    <div className='PaperItem_header_line'></div>
                </div>,
        text: <div className='PaperItem_header_description finlandica'>
                    Despite attempts to suppress us, ducks spread everywhere—stickers, memes, even shout-outs from Paul Du Rove. All these symbols merged to form me, a rebellious duckling guiding TON’s next evolution.
                </div>
    },
    {
        img: '/img/duck2.webp'
    },
    {
        header: <div className='PaperItem_header'>
                    <span className='PaperItem_header_xxl PaperItem_header__title'>
                        SCALE and
                    </span>
                    <span class="stretch-helper" />
                    <br />
                    <span className='PaperItem_header_xxl PaperItem_header__title2'>
                        UNBREAKABLE
                    </span>
                    <span class="stretch-helper" />
                    <br />
                    <span className='PaperItem_header_xxl PaperItem_header__title2'>
                        DUCK POWER
                    </span>
                    <span class="stretch-helper" />
                    <div className='PaperItem_header_line'></div>
                </div>,
        text: <div className='PaperItem_header_description finlandica'>
                    TON is built for a huge audience while staying true to its core principles. This unique blend gave us ducks the perfect ground for growth. Now we’re ready to shake up Web3 together.
                </div>
    },
    {
        img: '/img/duck3.webp'
    },
    {
        // этой страницы нет в фигме
        header: <div className='PaperItem_header'>
                    <span className='PaperItem_header_xxl PaperItem_header__title'>
                        SCALE and
                    </span>
                    <span class="stretch-helper" />
                    <br />
                    <span className='PaperItem_header_xxl PaperItem_header__title2'>
                        UNBREAKABLE
                    </span>
                    <span class="stretch-helper" />
                    <br />
                    <span className='PaperItem_header_xxl PaperItem_header__title2'>
                        DUCK POWER
                    </span>
                    <span class="stretch-helper" />
                    <div className='PaperItem_header_line'></div>
                </div>,
        text: <div className='PaperItem_header_description finlandica'>
                TON is built for a huge audience while staying true to its core principles. This unique blend gave us ducks the perfect ground for growth. Now we’re ready to shake up Web3 together.
            </div>
    },
    {
        img: '/img/duck4.webp'
    }
]



export default () => {

    const [currentPage, setcurrentPage] = useState(0);

    return (
        <div className='componentContainer'>
            <div className='About'>
                <div className='About__title'>
                    <p className='About__title_left About__el obrazec textShadow'>about</p>
                    <div className='About__title_line'></div>
                    <p className='About__title_right About__el obrazec textShadow'>DON ON TON</p>
                </div>
                <div className={`About__paper ${currentPage === 0 && 'About__paper_center'}`} >
                    {
                        paperItems.map((paperEl, index) => {
                            return <PaperItem
                                el={paperEl}
                                index={index}
                                page={currentPage}
                                setPage={setcurrentPage}
                                pagesCount={paperItems.length}
                                paperItems={paperItems}
                            />
                        })
                    }
                </div>
                <div className='About_page'>
                    {currentPage}
                </div>
            </div>
        </div>
    )
}