import { useEffect, useState } from 'react';
import './PaperItem.scss';
export default ({ el, index, page, setPage, pagesCount, paperItems }) => {
    const [isOdd, setisOdd] = useState(index % 2 === 0);

    const [zind, setzind] = useState(Math.abs(index - page) * -1);

    useEffect(() => {
        setTimeout(() => {
            setzind(Math.abs(index - page) * -1)
        }, 500);
    }, [page])

    return (
        <div className='PaperItem_wrapper free_img' style={{
            justifyContent: `${isOdd ? 'right' : 'left'}`,
            transform: `rotate3d(0, -1, 0, ${(index < page && !isOdd) ? 180
                : (index > page + 1 && isOdd) ? -180 : 0}deg)`,
            zIndex: `${zind}`
        }} onClick={() => {
            if (isOdd) {
                setPage(prev => Math.max(prev - 2, 0))
            } else {
                setPage(prev => Math.min(prev + 2, pagesCount - (pagesCount % 2 === 0 ? 2 : 1)))
            }
        }}

        >
            <div className='PaperItem'>
            {/* {paperItems.map((el, index) => (
                isOdd ? (
                    <div className='PaperItem__text'>
                        <p className='PaperItem__text_title obrazec'>{el.header}</p>
                        <div className='PaperItem__text_line'></div>
                        <p className='PaperItem__text_description finlandica'>{el.text}</p>
                    </div>
                    
                ) : (
                    <div className='PaperItem__img'>
                        <img src={el.img} alt="" className='PaperItem__img_img'/>
                    </div>
                )
            ))} */}
            </div>
        </div>
    )
}