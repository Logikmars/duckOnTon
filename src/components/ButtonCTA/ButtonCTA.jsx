import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useEffect } from "react";

const STATE_MACHINE_NAME = 'State Machine 1'; // Замени на своё
const RIVE_FILE = '/btn.riv'; // путь к твоему .riv файлу

import './ButtonCTA.scss';


export default () => {

    const { rive, RiveComponent } = useRive({
        src: RIVE_FILE,
        stateMachines: STATE_MACHINE_NAME,
        autoplay: true,
    });

    const isHoverInput = useStateMachineInput(rive, STATE_MACHINE_NAME, 'isHover');
    const isPressedInput = useStateMachineInput(rive, STATE_MACHINE_NAME, 'isPressed');

    return (
        <>
            <div className='ButtonCTA_trigger_wrapper'>
                <div className="ButtonCTA_trigger" onMouseEnter={() => {
                    if (isHoverInput) {
                        isHoverInput.value = true;
                    }
                }} onMouseLeave={() => {
                    if (isHoverInput) {
                        isHoverInput.value = false;
                    }
                }}

                    onMouseDown={() => {
                        if (isPressedInput) {
                            isPressedInput.value = true;
                        }
                    }} onMouseUp={() => {
                        if (isPressedInput) {
                            isPressedInput.value = false;
                        }
                        window.open('https://google.com', '_blank')
                    }}

                >

                </div>
            </div>
            <RiveComponent className="ButtonCTA" />
        </>
    )
}




