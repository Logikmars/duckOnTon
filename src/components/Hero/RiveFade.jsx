import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useEffect } from "react";

const STATE_MACHINE_NAME = 'State Machine 1'; // Замени на своё
const RIVE_FILE = '/duck_transparent.riv'; // путь к твоему .riv файлу

export default ({
    coords,
    ontrigger,
    offtrigger,
    taptrigger,
}) => {

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


    useEffect(() => {
        onInput?.fire()
    }, [ontrigger])

    useEffect(() => {
        offInput?.fire()
    }, [offtrigger])


    useEffect(() => {
        tapInput?.fire()
    }, [taptrigger])

    useEffect(() => {
        if (xInput && yInput) {
            xInput.value = coords.x;
            yInput.value = coords.y;
        }
    }, [coords, xInput, yInput]);

    return (
        <RiveComponent style={{
            pointerEvents: 'none',
            position: `absolute`
        }} />
    )
}