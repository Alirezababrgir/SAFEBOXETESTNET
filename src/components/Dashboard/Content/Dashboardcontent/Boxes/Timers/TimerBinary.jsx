import { useState, useEffect } from "react";
const TimerBinary = () => {

    const [currentTime, setCurrentTime] = useState(new Date().getTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const calculateReverseTime = () => {
        const currentTimeInSeconds = Math.floor(currentTime / 1000);
        const reverseSeconds = 60 - (currentTimeInSeconds % 60);
        const reverseMinutes = 59 - Math.floor((currentTimeInSeconds % 3600) / 60);
        const reverseHours = 23 - Math.floor(currentTimeInSeconds / 3600);

        return { reverseHours, reverseMinutes, reverseSeconds };
    };
    const { reverseHours, reverseMinutes, reverseSeconds } = calculateReverseTime();

    return (
        <main style={{ padding: "0 4rem " }}>
            <div class="container center">
                <section class="countdown-timer">
                    <div class="countdown-info">
                        <div class="timer-box">
                            <div id="flip-sheet-day" class="sheet"></div>
                            <div class="circle-left"></div>
                            <p id="days" class="primary">{reverseHours < 10 ? '0' + reverseHours : reverseHours}</p>
                            <div class="circle-right"></div>
                        </div>
                        <p class="sub-heading">Hours</p>
                    </div>

                    <div class="countdown-info">
                        <div class="timer-box">
                            <div id="flip-sheet-hour" class="sheet"></div>
                            <div class="circle-left"></div>
                            <p id="hours" class="primary"> {reverseMinutes < 10 ? '0' + reverseMinutes : reverseMinutes}</p>
                            <div class="circle-right"></div>
                        </div>
                        <p class="sub-heading">MINUTES</p>
                    </div>

                    <div class="countdown-info">
                        <div class="timer-box">
                            <div id="flip-sheet-min" class="sheet"></div>
                            <div class="circle-left"></div>
                            <p id="minutes" class="primary">{reverseSeconds < 10 ? '0' + reverseSeconds : reverseSeconds}</p>
                            <div class="circle-right"></div>
                        </div>
                        <p class="sub-heading">SECOUND</p>
                    </div>
                </section>
            </div>
        </main>
    )
}
export default TimerBinary;