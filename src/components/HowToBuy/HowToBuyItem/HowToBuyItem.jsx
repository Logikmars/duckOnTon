import './HowToBuyItem.scss';
export default ({ img, index, title, description}) => {return (
    <div className='HowToBuyItem free_img'>
        <div className='HowToBuyItem__img'>
            <img src={img} alt="" className='HowToBuyItem__img_img'/>
            <div className='HowToBuyItem__index free_img outfit'><p className='HowToBuyItem__index_text textShadow'>{index}</p></div>
        </div>
        <div className='HowToBuyItem__description'>
            <p className='HowToBuyItem__description_title outfit textShadow'>{title}</p>
            <p className='HowToBuyItem__description_description finlandica textShadow'>{description}</p>
        </div>
    </div>
)}