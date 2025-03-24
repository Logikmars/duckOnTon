import './Header.scss';
export default () => {
    return (
        <div className='Header'>
            <div className='Header__logo'>
                <img src="/img/logo.webp" alt="" className='Header__logo_img' />
                <a className='Header__logo_title obrazec Header__el'>
                    {/* DUCK ON TON */}
                    {
                        'DUCK ON TON'.split('').map((letter) => {
                            return <span className='obrazecNoLS' style={{
                                display: `${letter === ' ' ? 'inline' : 'inline-block'}`
                            }}>{letter}</span>
                        })
                    }
                </a>
            </div>
            <div className='Header__nav'>
                <a href='#' className='Header__nav_item obrazec Header__el'>
                    {
                        'ABOUT'.split('').map((letter) => {
                            return <span className='obrazecNoLS' style={{
                                display: `${letter === ' ' ? 'inline' : 'inline-block'}`
                            }}>{letter}</span>
                        })
                    }
                </a>
                <a href='#' className='Header__nav_item obrazec Header__el'>
                    {
                        'HOW TO BUY'.split('').map((letter) => {
                            return <span className='obrazecNoLS' style={{
                                display: `${letter === ' ' ? 'inline' : 'inline-block'}`
                            }}>{letter}</span>
                        })
                    }
                </a>
                <a href='#' className='Header__nav_item obrazec Header__el'>
                    {
                        'SOCIALS'.split('').map((letter) => {
                            return <span className='obrazecNoLS' style={{
                                display: `${letter === ' ' ? 'inline' : 'inline-block'}`
                            }}>{letter}</span>
                        })
                    }
                </a>
            </div>
        </div>
    )
}