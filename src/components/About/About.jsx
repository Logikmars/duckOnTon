import { useState } from 'react';
import './About.scss';
import PaperItem from './PaperItem';

const paperItems = [
    {
        start: `meow`,
    },
    {
        header: <div className='PaperItem_header'>
            <span className='PaperItem_header_xxl'>
                THE DARING
            </span>
            <span class="stretch-helper" />
            <br />
            DUCK OF THE TON ECOSYSTEM
        </div>,
        text: `We ducks have been part of Telegram for a while, but now it's time to show our true power. I'm here to lead the duck vanguard and help TON reach the top of crypto.`
    },
    {
        img: '/img/paper1.webp'
    },
    {
        header: `THE DARING DUCK OF THE TON ECOSYSTEM`,
        text: `We ducks have been part of Telegram for a while, but now it's time to show our true power. I'm here to lead the duck vanguard and help TON reach the top of crypto.`
    },
    {
        img: '/img/paper1.webp'
    },
    {
        header: `The Daring DUCK OF THE TON ECOSYSTEM`,
        text: `We ducks have been part of Telegram for a while, but now it's time to show our true power. I'm here to lead the duck vanguard and help TON reach the top of crypto.`
    },
    {
        img: '/img/paper1.webp'
    },
    {
        header: `The Daring DUCK OF THE TON ECOSYSTEM`,
        text: `We ducks have been part of Telegram for a while, but now it's time to show our true power. I'm here to lead the duck vanguard and help TON reach the top of crypto.`
    },
    {
        img: '/img/paper1.webp'
    }
]



export default () => {

    const [currentPage, setcurrentPage] = useState(2);

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