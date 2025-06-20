import './Footer.scss';
export default () => {
    return (
        // <div className='componentContainer'>
        <div className='Footer' id='SOCIALS'>
            <div className='Footer__title'>
                <p className='Footer__title_item outfit Footer__title_item_c'>© 2025. All rights reserved</p>
            </div>
            <div className='Footer__social'>
                <a href='https://t.me/DonDuckPortal' target='_blank'>
                    <img draggable='false' src="/img/tg.webp" alt="" />
                </a>
                <a>
                    <img draggable='false' src="/img/dex.webp" alt="" />
                </a>
                <a href='https://x.com/donduckton' target='_blank'>
                    <img draggable='false' src="/img/x.webp" alt="" />
                </a>
            </div>
        </div>
        // </div>
    )
}