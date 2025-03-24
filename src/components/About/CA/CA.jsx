import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CA.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default () => {

    const items = [
        { text: "SUPPLY: 1.000.000.000" },
        { text: "TON NETWORK" },
        { text: "LP: LOCKED" },
    ];

    const contractAddress = "COMING SOON";

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(contractAddress);
            toast.success("Copied to clipboard!", { position: "top-right", autoClose: 2000 });
        } catch (err) {
            toast.error("Failed to copy!", { position: "top-right", autoClose: 2000 });
            console.error("Failed to copy: ", err);
        }
    };

    const scope = useRef(null);
    useGSAP(() => {
        gsap.fromTo('.CA', {
            y: '100px',
            opacity: 0
        }, {
            y: '0px',
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: '.CA',
                scrub: 1,
                // markers: true,
                start: 'top 70%',
                end: 'top 70%',
            }
        })
    }, { scope: scope })

    return (
        <div className='CA_wrapper' ref={scope}>
            <div className='CA'>
                <div className='CA__top'>
                    <p className='CA__top_title obrazec'>CA:</p>
                    <div className='CA__top_container'>
                        <p className='CA__top_ca finlandica'>{contractAddress}</p>
                        <a
                            className='CA__top_clipboard finlandica'
                            onClick={copyToClipboard}
                        >
                            COPY TO CLIPBOARD
                        </a>
                    </div>
                </div>
                <div className='CA__bottom'>
                    {items.map((el, index) => (
                        <div key={index} className='CA__bottom_item outfit'>
                            {el.text}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
