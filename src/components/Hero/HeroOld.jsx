import './Hero.scss';


import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import { useEffect, useState } from 'react';
import RiveFade from './RiveFade';
import RiveUnFade from './RiveUnFade';

const cantToggleMs = 2500


export default () => {

    const [canToggle, setcanToggle] = useState(true);

    const [lightsOn, setlightsOn] = useState(false);
    const [ontrigger, setontrigger] = useState(0);
    const [offtrigger, setofftrigger] = useState(0);
    const [taptrigger, settaptrigger] = useState(0);

    const [turnerTrigger, setturnerTrigger] = useState(0);

    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = 100 - (e.clientY / window.innerHeight) * 100;
            setCoords({ x, y });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);



    return (
        <div className='Hero' style={{
            backgroundColor: lightsOn ? '#0000' : '#000'
        }}>
            <div className='Hero_tapcheck free_img'>
                <div className='Hero_tapcheck_inner' onClick={() => {
                    if (!lightsOn) {
                        setontrigger(Math.random())
                        setlightsOn(true)

                        setcanToggle(false)
                        setTimeout(() => {
                            setcanToggle(true)
                        }, cantToggleMs);
                    } else {
                        settaptrigger(Math.random())
                    }
                }}></div>
            </div>
            <div className='Hero_turner free_img'>
                <div className='Hero_turner_inner' onClick={() => {

                    if (!canToggle) return

                    setcanToggle(false)
                    setTimeout(() => {
                        setcanToggle(true)
                    }, cantToggleMs);


                    if (lightsOn) {
                        setofftrigger(Math.random())
                        setTimeout(() => {
                            setlightsOn(false)
                        }, 1000);
                    } else {
                        setontrigger(Math.random())
                        setlightsOn(true)
                    }
                }}></div>
            </div>

            <RiveFade
                coords={coords}
                ontrigger={ontrigger}
                offtrigger={offtrigger}
                taptrigger={taptrigger}
            />
            <RiveUnFade
                coords={coords}
                ontrigger={ontrigger}
                offtrigger={offtrigger}
                taptrigger={taptrigger}
                lightsOn={lightsOn}
            />


        </div>
    )
}