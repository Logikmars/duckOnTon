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
            transform: `rotate3d(0, -1, 0, ${isOdd
                ? index >= page
                    ? 0 : 180
                : index >= page
                    ? -180 : 0
                }deg)`,

            zIndex: `${zind}`

        }} onClick={() => {
            if (isOdd) {
                setPage(prev => Math.min(prev + 2, pagesCount - (pagesCount % 2 === 0 ? 2 : 1)))
            } else {
                setPage(prev => Math.max(prev - 2, 0))
            }
        }}

        >
            <div className='PaperItem'>
                {el.text ? <>
                    {el.header}
                </> : <>
                    <img src={el.img} alt="" />
                </>}
            </div>
        </div>
    )
}