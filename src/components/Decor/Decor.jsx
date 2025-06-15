import { useGSAP } from '@gsap/react';
import './Decor.scss';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
export default () => {




    const scope = useRef(null);

    useEffect(() => {
        const directions = [
            { selector: '.arrow_1', x: '25vw', y: '-400px', delay: 0 },
            { selector: '.arrow_2', x: '14vw', y: '-530px', delay: 0.5 },
            { selector: '.arrow_3', x: '-30vw', y: '-400px', delay: 1 },
            { selector: '.arrow_4', x: '0vw', y: '-500px', delay: 1.5 },
            { selector: '.arrow_5', x: '-15vw', y: '-450px', delay: 2 },
            { selector: '.arrow_6', x: '35vw', y: '-300px', delay: 2.5 },
            { selector: '.arrow_7', x: '25vw', y: '-500px', delay: 3 },
            { selector: '.arrow_8', x: '32vw', y: '-450px', delay: 3.5 },
            { selector: '.arrow_9', x: '-35vw', y: '-300px', delay: 4 },
            { selector: '.arrow_10', x: '-10vw', y: '-500px', delay: 4.5 },
        ];

        directions.forEach(({ selector, x, y, rotate, delay }) => {
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
                    rotate: (Math.random() - .5) * 45,
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


    const els = [
        {
            text: '$DON FAMILY STRONG!'
        },
        {
            text: 'DIAMOND HANDS ONLY'
        },
        {
            text: 'BULLISH FOREVER'
        },
        {
            text: 'FROM ZERO TO HERO'
        },
        {
            text: 'NO FEAR, JUST $DON!'
        },
        {
            text: 'BEST COMMUNITY'
        },
        {
            text: 'ONE COIN. ONE FAMILY. ONE MOON – $DON!'
        },
        {
            text: 'I CHOOSE $DON'
        },
        {
            text: '$DON IS NOT JUST A COIN, IT’S A MOVEMENT!'
        },
        {
            text: 'TO THE MOON'
        }
    ]

    return (
        <div className='Decor_wrapper' ref={scope}>
            <div className='Decor'>
                <div className='Decor__info'>
                    {/* {Array(10)
                        .fill(0)
                        .map((_, index) => {
                            return <div className={`free_img arrow_${index + 1}`}>
                                <img draggable='false' src={`/img/pdbr${index + 1}.svg`} alt="" />
                            </div>
                        })} */}
                    {
                        els.map((el, index) => (
                            <div className={`free_img arrow_${index + 1} `}>
                                <div className='Decor_text'>
                                    {el.text}
                                </div>
                            </div>
                        ))
                    }

                    <div className='Decor__info_table free_img'>
                        <img draggable='false' src="/img/caption1.webp" alt="" />
                    </div>
                    <div className='Decor__info_duck free_img'>
                        <img draggable='false' src="/img/duckDurov.webp" alt="" />
                    </div>
                    <div className='Decor__info_table Decor__info_table_right free_img'>
                        <img draggable='false' src="/img/caption2.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

