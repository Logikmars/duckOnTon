import { useRef } from 'react';
import './BornOn.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
export default () => {

    const scope = useRef(null);
    useGSAP(() => {
        gsap.fromTo('.BornOn', {
            y: '100px',
            opacity: 0
        }, {
            y: '0px',
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: '.BornOn',
                scrub: 1,
                // markers: true,
                start: 'top 70%',
                end: 'top 70%',
            }
        })
    }, { scope: scope })


    return (
        <div className='BornOn_wrapper' ref={scope}>
            <div className='BornOn'>
                <img draggable='false' src="/img/bornOnLab.webp" alt="" />
            </div>
        </div>
    )
}