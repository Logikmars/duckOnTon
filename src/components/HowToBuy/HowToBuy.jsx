import { useState } from 'react';
import './HowToBuy.scss';
import HowToBuyItem from './HowToBuyItem/HowToBuyItem';
export default () => {

    const HowToBuyItems = [
        {
            img: "/img/htb.png",
            title: "Use DeDust or STON.fi",
            description: "Open DeDust or STON.fi in Google Chrome  or in the browser inside Tonkeeper.Connect your wallet, enter the token name   (do not buy DUREVOLD) or paste the $DON contract address.Confirm the action — when Tonkeeper asks for a signature, sign it."
        },
        {
            img: "/img/htb.png",
            title: "Swap TON for $DON",
            description: "Exchange TON for $DON with no taxes.You don’t need to change the slippage, but if the transaction doesn’t go through — increase it to 1–3%."
        },
        {
            img: "/img/htb.png",
            title: "WHERE TO BUY TON?",
            description: "Buy TON with a card directly in Tonkeeper or TonSpace Or via exchanges: OKX, Bybit, KuCoin, EXMO, HTX, and others Also available on: Uniswap (ETH) and PancakeSwap (BSC)Full list — on CoinMarketCap"
        },
        {
            img: "/img/htb.png",
            title: "HOW TO BRIDGE TO TON?",
            description: "Bridge from any network to TON: [bridge.ton.org](https://bridge.ton.org [RocketX](https://www.rocketx.exchange [ChangeNOW](https://changenow.io) or via a CEX that supports TON withdrawals"
        },
    ]


    const [currentSlide, setcurrentSlide] = useState(1);

    // uasdasdasdasd
    // asdasd

    return (
        <div className='componentContainer'>
            <div className='HowToBuy'>
                <p className='HowToBuy__title obrazec textShadow' onClick={() => {
                    setcurrentSlide(prev => (prev + 1) < 5 ? prev + 1 : 1)
                }}>HOW TO BUY</p>
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
    )
}