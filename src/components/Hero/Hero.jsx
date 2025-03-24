import './Hero.scss';


import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import { useEffect, useState } from 'react';

const STATE_MACHINE_NAME = 'State Machine 1'; // Замени на своё
const RIVE_FILE = '/duck.riv'; // путь к твоему .riv файлу

export default () => {


    const { rive, RiveComponent } = useRive({
        src: RIVE_FILE,
        stateMachines: STATE_MACHINE_NAME,
        autoplay: true,
    });

    const onInput = useStateMachineInput(rive, STATE_MACHINE_NAME, 'on');
    const offInput = useStateMachineInput(rive, STATE_MACHINE_NAME, 'off');
    const tapInput = useStateMachineInput(rive, STATE_MACHINE_NAME, 'tap');
    const signInput = useStateMachineInput(rive, STATE_MACHINE_NAME, 'sign');
    const xInput = useStateMachineInput(rive, STATE_MACHINE_NAME, 'x');
    const yInput = useStateMachineInput(rive, STATE_MACHINE_NAME, 'y');

    const [lightsOn, setlightsOn] = useState(false);
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


    useEffect(() => {
        if (xInput && yInput) {
            xInput.value = coords.x;
            yInput.value = coords.y;
        }
    }, [coords, xInput, yInput]);

    let interval

    useEffect(() => {
        if (lightsOn) {
            interval = setInterval(() => {
                signInput?.fire()
            }, 5000);
        }
    }, [lightsOn])


    return (
        <div className='Hero'>
            <div className='Hero_tapcheck free_img'>
                <div className='Hero_tapcheck_inner' onClick={() => {
                    if (!lightsOn) {
                        onInput?.fire()
                        setlightsOn(true)
                    } else {
                        tapInput?.fire()
                        // signInput?.fire()
                    }
                }}></div>
            </div>
            {/* <div className='Hero_rive'> */}
            <RiveComponent />
            {/* </div> */}
        </div>
    )
}