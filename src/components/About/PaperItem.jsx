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
            justifyContent: `${isOdd ? 'left' : 'right'}`,
            transform: `rotateY(${(isOdd
                ? index === page
                    ? 0 : index > page ? 5 : -185
                : index === page - 1
                    ? 0 : index > page ? 185 : -5
            )}deg) `,
            // opacity: isOdd ? 1 : 0,
            // zIndex: `${zind}`

        }} onClick={() => {
            if (isOdd) {
                setPage(prev => Math.min(prev + 2, pagesCount + 2 - (pagesCount % 2 === 0 ? 2 : 1)))
            } else {
                setPage(prev => Math.max(prev - 2, 0))
            }
        }}

        >
            <div className='PaperItem'>
                {el.start && <div className='PaperItem_textWrapper'>{el.start}</div>}
                {el.text ? <div className='PaperItem_textWrapper'>
                    {el.header}{el.text}
                </div> : <>
                    <img src={el.img} alt="" />
                </>}
            </div>
        </div>
    )
}