import './Decor.scss';
export default () => {
    return (
        <div className='Decor'>
            <div className='Decor__info'>
                <div className='Decor__info_table free_img'>
                    <img src="/img/caption1.webp" alt="" />
                </div>
                <div className='Decor__info_duck free_img'>
                    <img src="/img/duck.webp" alt="" />
                </div>
                <div className='Decor__info_table Decor__info_table_right free_img'>
                    <img src="/img/caption2.webp" alt="" />
                </div>
            </div>
        </div>
    )
}