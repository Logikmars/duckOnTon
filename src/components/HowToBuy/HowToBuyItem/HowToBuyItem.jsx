import './HowToBuyItem.scss';
export default ({ img, index, title, description, currentSlide }) => {
    return (
        <div className='HowToBuyItem_wrapper free_img' style={{
            transform: `translate(${(currentSlide - index) * 1200 * -1}px,0px) `,
            opacity: (currentSlide === index) ? 1 : .5,
            filter: `blur(${(currentSlide === index) ? 0 : 10}px)`,
        }}>
            <div className='HowToBuyItem'>
                <div className='HowToBuyItem__img'>
                    <div className='HowToBuyItem__index free_img'>
                        <p className='HowToBuyItem__index_text outfit'>{index}</p>
                    </div>
                    <div className='HowToBuyItem__img_wrapper'>
                        <img src={img} alt="" className={`HowToBuyItem__img_${index}`} />
                    </div>
                </div>
                <div className='HowToBuyItem__description'>
                    <p className='HowToBuyItem__description_title outfit '>{title}</p>
                    <p className='HowToBuyItem__description_description finlandica'>{description}</p>
                </div>
            </div>
        </div>
    )
}