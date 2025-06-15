import { useGSAP } from '@gsap/react';
import './Decor.scss';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
export default () => {




    const scope = useRef(null);

    useEffect(() => {
        const directions = [
            { selector: '.arrow_1', x: '20vw', y: '-400px', delay: 0 },
            { selector: '.arrow_2', x: '10vw', y: '-550px', delay: 0.5 },
            { selector: '.arrow_3', x: '-25vw', y: '-400px', delay: 1 },
            { selector: '.arrow_4', x: '0vw', y: '-550px', delay: 1.5 },
            { selector: '.arrow_5', x: '-30vw', y: '-450px', delay: 2 },
            { selector: '.arrow_6', x: '25vw', y: '-300px', delay: 2.5 },
            { selector: '.arrow_7', x: '30vw', y: '-400px', delay: 3 },
            { selector: '.arrow_8', x: '20vw', y: '-550px', delay: 3.5 },
            { selector: '.arrow_9', x: '-20vw', y: '-300px', delay: 4 },
            { selector: '.arrow_10', x: '-35vw', y: '-550px', delay: 4.5 },
        ];

        directions.forEach(({ selector, x, y, delay }) => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, delay });

            tl.set(selector, { x: '0vw', y: '100vh', opacity: 0 })
              .to(selector, {
                opacity: 1,
                duration: 1,
                ease: 'power2.in'
              })
              .to(selector, {
                x,
                y,
                duration: 2,
                ease: 'power2.out'
              })
              .to(selector, {
                opacity: 0,
                duration: 3,
                ease: 'power1.in'
              });
        });
    }, []);


    return (
        <div className='Decor_wrapper' ref={scope}>
            <div className='Decor'>
                <div className='Decor__info'>
                    {Array(10)
                        .fill(0)
                        .map((_, index) => {
                            return <div className={`free_img arrow_${index + 1}`}>
                                <img src={`/img/pdbr${index + 1}.svg`} alt="" />
                            </div>
                        })}

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
        </div>
    )
}