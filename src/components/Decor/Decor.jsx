import { useGSAP } from '@gsap/react';
import './Decor.scss';
import { useRef } from 'react';
import gsap from 'gsap';
export default () => {




    const scope = useRef(null);
    useGSAP(() => {
        gsap.fromTo('.arrow_1', {
            x: '30vw',

        }, {
            y: '-500px',
            x: '10vw',
            ease: 'none',
            scrollTrigger: {
                trigger: '.Decor',
                scrub: 1,
                // markers: true,
                start: '0% 100%',
                end: '150% 100%',

            }
        })
        gsap.fromTo('.arrow_2', {
            x: '0vw',
        }, {
            y: '-500px',
            x: '10vw',
            ease: 'none',
            scrollTrigger: {
                trigger: '.Decor',
                scrub: 3,
                // markers: true,
                start: '0% 100%',
                end: '150% 100%',
            }
        })

        gsap.fromTo('.arrow_3', {
            x: '-10vw',
        }, {
            y: '-400px',
            x: '-15vw',
            ease: 'none',
            scrollTrigger: {
                trigger: '.Decor',
                scrub: 6,
                // markers: true,
                start: '0% 100%',
                end: '150% 100%',

            }
        })


        gsap.fromTo('.arrow_4', {
            x: '-5vw',
        }, {
            y: '-600px',
            x: '0vw',
            ease: 'none',
            scrollTrigger: {
                trigger: '.Decor',
                scrub: 1,
                // markers: true,
                start: '0% 100%',
                end: '150% 100%',

            }
        })

        gsap.fromTo('.arrow_5', {
            x: '-10vw',
        }, {
            y: '-500px',
            x: '-30vw',
            ease: 'none',
            scrollTrigger: {
                trigger: '.Decor',
                scrub: 4,
                // markers: true,
                start: '0% 100%',
                end: '150% 100%',

            }
        })
        gsap.fromTo('.arrow_6', {
            x: '15vw',
        }, {
            y: '-300px',
            x: '25vw',
            ease: 'none',
            scrollTrigger: {
                trigger: '.Decor',
                scrub: 8,
                // markers: true,
                start: '0% 100%',
                end: '150% 100%',

            }
        })
        gsap.fromTo('.arrow_7', {
            x: '20vw',

        }, {
            y: '-400px',
            x: '30vw',
            ease: 'none',
            scrollTrigger: {
                trigger: '.Decor',
                scrub: 3,
                // markers: true,
                start: '0% 100%',
                end: '150% 100%',

            }
        })
        gsap.fromTo('.arrow_8', {
            x: '10vw',

        }, {
            y: '-500px',
            x: '20vw',
            ease: 'none',
            scrollTrigger: {
                trigger: '.Decor',
                scrub: 10,
                // markers: true,
                start: '0% 100%',
                end: '150% 100%',

            }
        })
        gsap.fromTo('.arrow_9', {
            x: '-10vw',
        }, {
            y: '-300px',
            x: '-20vw',
            ease: 'none',
            scrollTrigger: {
                trigger: '.Decor',
                scrub: 2,
                // markers: true,
                start: '0% 100%',
                end: '150% 100%',

            }
        })
        gsap.fromTo('.arrow_10', {
            x: '-15vw',
        }, {
            y: '-600px',
            x: '-30vw',
            ease: 'none',
            scrollTrigger: {
                trigger: '.Decor',
                scrub: 4,
                // markers: true,
                start: '0% 100%',
                end: '150% 100%',

            }
        })
    }, { scope: scope })


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