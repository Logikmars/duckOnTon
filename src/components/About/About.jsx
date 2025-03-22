import { useState } from 'react';
import './About.scss';
import PaperItem from './PaperItem';

const paperItems = [
    {
        start: `meow`,
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

    const [currentPage, setcurrentPage] = useState(0);

    return (
        <div className='componentContainer'>
            <div className='About'>
                {/* <div className='About__title'>
                    <p className='About__title_left About__el obrazec textShadow'>about</p>
                    <div className='About__title_line'></div>
                    <p className='About__title_right About__el obrazec textShadow'>DON ON TON</p>
                </div> */}
                <div className='About__paper'>
                    {
                        paperItems.map((paperEl, index) => {
                            return <PaperItem
                                el={paperEl}
                                index={index}
                                page={currentPage}
                                setPage={setcurrentPage}
                                pagesCount={paperItems.length}
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