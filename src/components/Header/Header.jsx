import './Header.scss';
export default () => {
    return (
        <div className='Header'>
            <div className='Header__logo'>
                <img src="/img/logo.webp" alt="" className='Header__logo_img' />
                <p className='Header__logo_title obrazec Header__el'>DUCK on ton</p>
            </div>
            <div className='Header__nav'>
                <a href='#' className='Header__nav_item obrazec Header__el'>About</a>
                <a href='#' className='Header__nav_item obrazec Header__el'>How to buy</a>
                <a href='#' className='Header__nav_item obrazec Header__el'>SOCIALS</a>
            </div>
        </div>
    )
}