import './About.scss';
import AboutPaperItemText from './AboutPaperItemText/AboutPaperItemText';
export default () => {return (
    <div className='componentContainer'>
        <div className='About'>
            <div className='About__title'>
                <p className='About__title_left About__el obrazec textShadow'>about</p>
                <div className='About__title_line'></div>
                <p className='About__title_right About__el obrazec textShadow'>DON ON TON</p>
            </div>
            <div className='About__paper'>
                <AboutPaperItemText title={"The Daring DUCK OF THE TON ECOSYSTEM"} description={"We ducks have been part of Telegram for a while, but now it’s time to show our true power. I’m here to lead the duck vanguard and help TON reach the top of crypto."} img={"/img/paper1.webp"}/>
            </div>
        </div>
    </div>
)}