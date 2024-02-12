const Timer = () => {
    return (
        <main style={{ padding:"0 4rem " }}>
            <div class="container center">
                <section class="countdown-timer">
                    <div class="countdown-info">
                        <div class="timer-box">
                            <div id="flip-sheet-day" class="sheet"></div>
                            <div class="circle-left"></div>
                            <p id="days" class="primary">00</p>
                            <div class="circle-right"></div>
                        </div>
                        <p class="sub-heading">DAYS</p>
                    </div>

                    <div class="countdown-info">
                        <div class="timer-box">
                            <div id="flip-sheet-hour" class="sheet"></div>
                            <div class="circle-left"></div>
                            <p id="hours" class="primary">00</p>
                            <div class="circle-right"></div>
                        </div>
                        <p class="sub-heading">HOURS</p>
                    </div>

                    <div class="countdown-info">
                        <div class="timer-box">
                            <div id="flip-sheet-min" class="sheet"></div>
                            <div class="circle-left"></div>
                            <p id="minutes" class="primary">00</p>
                            <div class="circle-right"></div>
                        </div>
                        <p class="sub-heading">MINUTES</p>
                    </div>
                </section>
            </div>
        </main>
    )
}
export default Timer;