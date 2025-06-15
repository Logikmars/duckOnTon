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
                <span className='PaperItem_header_xxl PaperItem_header_1_3_title_m'>
                    LET`S<span> </span>GET<span> </span>QUACKIN`
                </span>
            </div>

            {/* <div className='PaperItem_ctoblinker free_img'>
                <div className='finlandica PaperItem_ctoblinker_inner'>
                    CLICK TO OPEN
                </div>
            </div> */}
            <img src="/img/clickToOpen.webp" alt="" />
        </div>,
    },
    {
        header:
            <>
                <div className='PaperItem_header PaperItem_header_2_1'>
                    <span className='PaperItem_header_xxl PaperItem_header_2_1_title'>
                        TON'S<span> </span>
                    </span>
                </div>

                <div className='PaperItem_header PaperItem_header_2_2'>
                    <span className='PaperItem_header_xxl PaperItem_header_2_2_title'>
                        GODDUCK<span> </span>
                    </span>
                </div>
                {/* <div className='PaperItem_header PaperItem_header_2_3'>
                    <span className='PaperItem_header_xxl PaperItem_header_2_3_title'>
                        TON<span> </span>ECOSYSTEM
                    </span>
                </div> */}


                <div className='PaperItem_header_line'></div>
            </>,
        text: <div className='PaperItem_header_description CrimsonPro'>
            <span className='PaperItem_header_description_bold'>As TON soared</span>, I stayed quiet, pulling strings behind Telegram’s curtain.
            <br />
            Hidden yet powerful, invisible yet unstoppable – until today.
            <br />
            <span className='PaperItem_header_description_bold'>I’m stepping out of the shadows,</span> claiming my throne as TON’s legendary mascot and crypto’s smoothest operator.

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
                        FROM<span> </span>STICKERS<span> </span>
                    </span>
                </div>

                <div className='PaperItem_header PaperItem_header_3_2'>
                    <span className='PaperItem_header_xxl PaperItem_header_3_2_title'>
                        TO ICON
                    </span>
                </div>
                {/* <div className='PaperItem_header PaperItem_header_3_3'>
                    <span className='PaperItem_header_xxl PaperItem_header_3_3_title'>
                        A<span> </span>REBEL<span> </span>DUCKLING
                    </span>
                </div> */}
                <div className='PaperItem_header_line'></div>
            </>,
        text: <div className='PaperItem_header_description CrimsonPro'>
            While rivals chased fleeting hype, I silently conquered Telegram – in stickers, viral memes, and subtle nods whispered by Paul Du Rove himself.
            <br />
            Now these symbols have come alive in me: DON – the duck destined to lead TON’s next evolution <span className='PaperItem_header_description_bold'> and rewrite crypto’s narrative.</span>

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
                        DUCK<span> </span>
                    </span>
                </div>

                {/* <div className='PaperItem_header PaperItem_header_4_2'>
                    <span className='PaperItem_header_xxl PaperItem_header_4_2_title'>
                        UNBREAKABLE
                    </span>
                </div> */}
                <div className='PaperItem_header PaperItem_header_4_3'>
                    <span className='PaperItem_header_xxl PaperItem_header_4_3_title'>
                        DOMINANCE
                    </span>
                </div>
                <div className='PaperItem_header_line'></div>
            </>,
        text: <>
            <div className='PaperItem_header_description CrimsonPro'>
                TON is built to scale and dominate, yet never compromises its principles –
                <span className='PaperItem_header_description_bold'>
                    the perfect stage for me, DON, to truly spread my wings.
                </span>
            </div>
            <div className='PaperItem_header PaperItem_header_4_1'>
                <span className='PaperItem_header_xxl PaperItem_header_4_1_title_l'>
                    LET'S<span> </span>RULE
                </span>
            </div>
            <div className='PaperItem_header PaperItem_header_4_2'>
                <span className='PaperItem_header_xxl PaperItem_header_4_1_title_small'>
                    WEB3<span> </span>TOGETHER.
                </span>
            </div>
        </>
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