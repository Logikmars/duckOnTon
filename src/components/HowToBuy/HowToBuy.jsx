import { useRef, useState } from 'react';
import './HowToBuy.scss';
import HowToBuyItem from './HowToBuyItem/HowToBuyItem';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
export default () => {

    const HowToBuyItems = [
        {
            img: "/img/htb1.webp",
            title: "Use DeDust or STON.fi",
            description: "Open DeDust or STON.fi in Google Chrome  or in the browser inside Tonkeeper.Connect your wallet, enter the token name  or paste the $DON contract address.Confirm the action — when Tonkeeper asks for a signature, sign it."
        },
        {
            img: "/img/htb2.webp",
            title: "Swap TON for $DON",
            description: "Exchange TON for $DON with no taxes.You don’t need to change the slippage, but if the transaction doesn’t go through — increase it to 1–3%."
        },
        {
            img: "/img/htb3.webp",
            title: "WHERE TO BUY TON?",
            description: "Buy TON with a card directly in Tonkeeper or TonSpace Or via exchanges: OKX, Bybit, KuCoin, EXMO, HTX, and others Also available on: Uniswap (ETH) and PancakeSwap (BSC)Full list — on CoinMarketCap."
        },
        {
            img: "/img/htb4.webp",
            title: "HOW TO BRIDGE TO TON?",
            description: <>
                Bridge from any network to TON:&nbsp;
                <a href="https://bridge.ton.org">Bridge,</a>&nbsp;
                <a href="https://www.rocketx.exchange">RocketX,</a>&nbsp;
                <a href="https://changenow.io">ChangeNOW,</a>&nbsp;
                or via a CEX that supports TON withdrawals.
            </>
        },
    ]


    const [currentSlide, setcurrentSlide] = useState(1);


    const scope = useRef(null);
    useGSAP(() => {
        gsap.to('.HowToBuy', {
            y: '0px',
            ease: 'none',
            scrollTrigger: {
                trigger: '.HowToBuy_wrapper',
                scrub: 0,
                // markers: true,
                pin: '.HowToBuy_wrapper',
                pinSpacing: false,
                start: 'top 0%',
                end: 'bottom 100%',
                onUpdate: self => {
                    const percent = Math.round(self.progress * 100);
                    // console.log('Progress:', percent + '%');
                    setcurrentSlide(Math.max(Math.ceil(percent / (100 / 4)), 1))
                }
            }
        })
    }, { scope: scope })




    return (
        <div className='HowToBuy_w' id='HTB' ref={scope}>
            <div className='HowToBuy_wrapper'>
                <div className='HowToBuy'>
                    <p className='HowToBuy__title obrazec textShadow memeText'>
                        {
                            'HOW TO BUY'.split('').map((letter) => {
                                return <span className='obrazecNoLS' style={{
                                    display: `${letter === ' ' ? 'inline' : 'inline-block'}`
                                }}>{letter}</span>
                            })
                        }
                    </p>
                    <div className='HowToBuy__wrapper'>
                        {HowToBuyItems.map((el, index) => (
                            <HowToBuyItem
                                img={el.img}
                                index={index + 1}
                                title={el.title}
                                description={el.description}
                                currentSlide={currentSlide}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}