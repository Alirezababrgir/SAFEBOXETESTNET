import { useState, useEffect } from "react";
const TimerBinary = () => {

    const [countdown, setCountdown] = useState(0);

    useEffect(() => {
          const timeDifference = Math.floor(new Date().toUTCString());
        //const timeDifference= Math.floor(new Date.UTC());
        // console.log(time)

        setCountdown(timeDifference);

        const interval = setInterval(() => {
            setCountdown((prevCount) => prevCount > 0 ? prevCount - 1 : 0);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hours = Math.floor((countdown % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((countdown % (60 * 60)) / 60);
    const secounds = Math.floor((countdown % 60));

    //FORMAT 00 

    const formatNumber = (number) => {
        return number < 10 ? '0' + number : number;
    };
    const formattedHours = formatNumber(hours);
    const formattedMinutes = formatNumber(minutes);
    const formattedSecounds = formatNumber(secounds);

    return (
        <main style={{ padding: "0 4rem " }}>
            <div class="container center">
                <section class="countdown-timer">
                    <div class="countdown-info">
                        <div class="timer-box">
                            <div id="flip-sheet-day" class="sheet"></div>
                            <div class="circle-left"></div>
                            <p id="days" class="primary">{formattedHours}</p>
                            <div class="circle-right"></div>
                        </div>
                        <p class="sub-heading">Hours</p>
                    </div>

                    <div class="countdown-info">
                        <div class="timer-box">
                            <div id="flip-sheet-hour" class="sheet"></div>
                            <div class="circle-left"></div>
                            <p id="hours" class="primary"> {formattedMinutes}</p>
                            <div class="circle-right"></div>
                        </div>
                        <p class="sub-heading">MINUTES</p>
                    </div>

                    <div class="countdown-info">
                        <div class="timer-box">
                            <div id="flip-sheet-min" class="sheet"></div>
                            <div class="circle-left"></div>
                            <p id="minutes" class="primary">{formattedSecounds} </p>
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