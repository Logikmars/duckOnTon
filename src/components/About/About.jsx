import { useState } from 'react';
import './About.scss';
import PaperItem from './PaperItem';

const paperItems = [
    {
        start: <div className='PaperItem_start'>

            <div className='PaperItem_header PaperItem_header_1_1'>
                <span className='PaperItem_header_xxl PaperItem_header_1_1_title'>
                    HEY!
                </span>
            </div>
            <div className='PaperItem_header PaperItem_header_1_2'>
                <span className='PaperItem_header_xxl PaperItem_header_1_2_title'>
                    I'M<span> </span>DON
                </span>
            </div>
            <div className='PaperItem_header PaperItem_header_1_3'>
                <span className='PaperItem_header_xxl PaperItem_header_1_3_title'>
                    NICE<span> </span>TO<span> </span>MEET<span> </span>YOU
                </span>
            </div>

            <div className='PaperItem_ctoblinker free_img'>
                <div className='finlandica PaperItem_ctoblinker_inner'>
                    CLICK TO OPEN
                </div>
            </div>
            <img draggable='false' src="/img/clickToOpen.webp" alt="" />
        </div>,
    },
    {
        header:
            <>
                <div className='PaperItem_header PaperItem_header_2_1'>
                    <span className='PaperItem_header_xxl PaperItem_header_2_1_title'>
                        THE<span> </span>DARING
                    </span>
                </div>

                <div className='PaperItem_header PaperItem_header_2_2'>
                    <span className='PaperItem_header_xxl PaperItem_header_2_2_title'>
                        DUCK<span> </span>OF<span> </span>THE
                    </span>
                </div>
                <div className='PaperItem_header PaperItem_header_2_3'>
                    <span className='PaperItem_header_xxl PaperItem_header_2_3_title'>
                        TON<span> </span>ECOSYSTEM
                    </span>
                </div>


                <div className='PaperItem_header_line'></div>
            </>,
        text: <div className='PaperItem_header_description CrimsonPro'>
            We ducks have been part of Telegram for a while, but now it's time to show our true power. I'm here to lead the duck vanguard and help TON reach the top of crypto.
        </div>
    },
    {
        img: '/img/paper1.webp'
    },
    {
        header:
            <>
                <div className='PaperItem_header PaperItem_header_3_1'>
                    <span className='PaperItem_header_xxl PaperItem_header_3_1_title'>
                        FROM<span> </span>AN<span> </span>INNOCENT
                    </span>
                </div>

                <div className='PaperItem_header PaperItem_header_3_2'>
                    <span className='PaperItem_header_xxl PaperItem_header_3_2_title'>
                        STICKER<span> </span>to
                    </span>
                </div>
                <div className='PaperItem_header PaperItem_header_3_3'>
                    <span className='PaperItem_header_xxl PaperItem_header_3_3_title'>
                        A<span> </span>REBEL<span> </span>DUCKLING
                    </span>
                </div>
                <div className='PaperItem_header_line'></div>
            </>,
        text: <div className='PaperItem_header_description CrimsonPro'>
            Despite attempts to suppress us, ducks spread everywhere — stickers, memes, even shout-outs from Paul Du Rove. All these symbols merged to form me, a rebellious duckling guiding TON's next evolution.
        </div>
    },
    {
        img: '/img/duck2.webp'
    },
    {
        header:
            <>
                <div className='PaperItem_header PaperItem_header_4_1'>
                    <span className='PaperItem_header_xxl PaperItem_header_4_1_title'>
                        SCALE<span> </span>AND
                    </span>
                </div>

                <div className='PaperItem_header PaperItem_header_4_2'>
                    <span className='PaperItem_header_xxl PaperItem_header_4_2_title'>
                        UNBREAKABLE
                    </span>
                </div>
                <div className='PaperItem_header PaperItem_header_4_3'>
                    <span className='PaperItem_header_xxl PaperItem_header_4_3_title'>
                        DUCK<span> </span>POWER
                    </span>
                </div>
                <div className='PaperItem_header_line'></div>
            </>,
        text: <div className='PaperItem_header_description CrimsonPro'>
            TON is built for a huge audience while staying true to its core principles. This unique blend gave us ducks the perfect ground for growth. Now we’re ready to shake up Web3 together.
        </div>
    },
    {
        img: '/img/duck3.webp'
    },
    {
        img: '/img/duck4.webp'
    }
]



export default () => {

    const [currentPage, setcurrentPage] = useState(0);

    return (
        <div className='componentContainer' id='ABOUT'>
            <div className='About'>
                <div className='About__title'>
                    <p className='About__title_left About__el obrazec textShadow memeText'>
                        {
                            'ABOUT'.split('').map((letter) => {
                                return <span className='obrazecNoLS' style={{
                                    display: `${letter === ' ' ? 'inline' : 'inline-block'}`
                                }}>{letter}</span>
                            })
                        }
                    </p>
                    <div className='About__title_line'></div>
                    <p className='About__title_right About__el About__el_last obrazec textShadow memeText'>
                        {
                            'DON ON TON'.split('').map((letter) => {
                                return <span className='obrazecNoLS' style={{
                                    display: `${letter === ' ' ? 'inline' : 'inline-block'}`
                                }}>{letter}</span>
                            })
                        }

                    </p>
                </div>
                <div className={`About__paper ${currentPage === 0 && 'About__paper_center'} ${currentPage > paperItems.length - 1 && 'About__paper_center_last'}`}>
                    {
                        paperItems.map((paperEl, index) => {
                            // if (index > 1) return
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
            </div>
        </div>
    )
}