import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CA.scss';

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

    return (
        <div className='CA_wrapper'>
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
