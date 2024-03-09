import { useEffect, useState } from "react";
const Timerunilevel = ({ timer }) => {
    // - Date.now()) 
  const targetDate = new Date(Number(timer)* 1000);
 

      const currentDate = new Date();
      const difference = targetDate - currentDate;

      const [countdown, setCountdown] = useState(0);

      useEffect(() => {  
  
          setCountdown(difference);
  
          const interval = setInterval(() => {
              setCountdown((prevCount) => prevCount > 0 ? prevCount - 1 : 0);
          }, 1000);
  
          return () => clearInterval(interval);
      }, [timer]);
  
      const days = Math.floor(countdown / (24 * 60 * 60));
      const hours = Math.floor((countdown % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((countdown % (60 * 60)) / 60);
  
      //FORMAT 00 
  
      const formatNumber = (number) => {
          return number < 10 ? '0' + number : number;
      };
      const formattedDays = formatNumber(days);
      const formattedHours = formatNumber(hours);
      const formattedMinutes = formatNumber(minutes);

      console.log(formattedDays)
  
      
  


    return (
        <main style={{ padding: "0 4rem " }}>
            <div class="container center">
                <section class="countdown-timer">
                    <div class="countdown-info">
                        <div class="timer-box">
                            <div id="flip-sheet-day" class="sheet"></div>
                            <div class="circle-left"></div>
                            <p id="days" class="primary">{formattedDays}</p>
                            <div class="circle-right"></div>
                        </div>
                        <p class="sub-heading">DAYS</p>
                    </div>

                    <div class="countdown-info">
                        <div class="timer-box">
                            <div id="flip-sheet-hour" class="sheet"></div>
                            <div class="circle-left"></div>
                            <p id="hours" class="primary">{formattedHours}</p>
                            <div class="circle-right"></div>
                        </div>
                        <p class="sub-heading">HOURS</p>
                    </div>

                    <div class="countdown-info">
                        <div class="timer-box">
                            <div id="flip-sheet-min" class="sheet"></div>
                            <div class="circle-left"></div>
                            <p id="minutes" class="primary">{formattedMinutes}</p>
                            <div class="circle-right"></div>
                        </div>
                        <p class="sub-heading">MINUTES</p>
                    </div>
                </section>
            </div>
        </main>
    )
}
export default Timerunilevel;