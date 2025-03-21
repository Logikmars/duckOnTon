import './AboutPaperItemText.scss';
export default ({ title, description, img}) => {return (
    <div className='AboutPaperItemText free_img'>
        <div className='AboutPaperItemText__text'>
            <p className='AboutPaperItemText__text_title obrazec'>{title}</p>
            <div className='AboutPaperItemText__text_line'></div>
            <p className='AboutPaperItemText__text_description finlandica'>{description}</p>
        </div>
        <div className='AboutPaperItemText__img'>
            <img src={img} alt="" className='AboutPaperItemText__img_img'/>
        </div>
    </div>
)}