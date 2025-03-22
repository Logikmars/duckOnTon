import './HowToBuyItem.scss';
export default ({ img, index, title, description, currentSlide }) => {
    return (
        <div className='HowToBuyItem_wrapper free_img' style={{
            transform: `translate(${(currentSlide - index) * 600 * -1}px,0px) `,
            opacity: (currentSlide === index) ? 1 : .5
        }}>
            <div className='HowToBuyItem'>
                <div className='HowToBuyItem__img'>
                    <img src={img} alt="" className='HowToBuyItem__img_img' />
                    <div className='HowToBuyItem__index free_img'>
                        <p className='HowToBuyItem__index_text textShadow outfit'>{index}</p>
                    </div>
                </div>
                <div className='HowToBuyItem__description'>
                    <p className='HowToBuyItem__description_title outfit textShadow'>{title}</p>
                    <p className='HowToBuyItem__description_description finlandica'>{description}</p>
                </div>
            </div>
        </div>
    )
}