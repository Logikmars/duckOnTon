import './Header.scss';
export default () => {
    return (
        <>
            <div className='Header'>

                <div className='Header__logo'>
                    <img draggable='false' src="/img/logo.webp" alt="" className='Header__logo_img' />
                    <a className='Header__logo_title obrazec Header__el Header__el_selected memeText'>
                        {
                            'DON'.split('').map((letter) => {
                                return <span className='obrazecNoLS' style={{
                                    display: `${letter === ' ' ? 'inline' : 'inline-block'}`
                                }}>{letter}</span>
                            })
                        }
                    </a>
                </div>

                <div className='Header_media'>
                    <a href='https://t.me/DonDuckPortal' target='_blank' className='Header_media_element'>
                        <img draggable='false' src="/img/tg.webp" alt="" />
                    </a>
                    <a className='Header_media_element'>
                        <img draggable='false' src="/img/dex.webp" alt="" />
                    </a>
                    <a href='https://x.com/donduckton' target='_blank' className='Header_media_element'>
                        <img draggable='false' src="/img/x.webp" alt="" />
                    </a>
                </div>
            </div>

            <div className='Header__nav_wrap free_img'>
                <div className='Header__nav'>
                    <a href='#ABOUT' className='Header__nav_item obrazec Header__el memeText'>
                        {
                            'ABOUT'.split('').map((letter) => {
                                return <span className='obrazecNoLS' style={{
                                    display: `${letter === ' ' ? 'inline' : 'inline-block'}`
                                }}>{letter}</span>
                            })
                        }
                    </a>
                    <a href='#HTB' className='Header__nav_item obrazec Header__el memeText'>
                        {
                            'HOW TO BUY'.split('').map((letter) => {
                                return <span className='obrazecNoLS' style={{
                                    display: `${letter === ' ' ? 'inline' : 'inline-block'}`
                                }}>{letter}</span>
                            })
                        }
                    </a>
                </div>
            </div>
        </>
    )
}