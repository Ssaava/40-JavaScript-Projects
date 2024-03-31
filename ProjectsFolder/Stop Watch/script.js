window.addEventListener("load", () => {
  const pause = document.querySelector(".pause");
  const stop = document.querySelector(".stop");
  const start = document.querySelector(".start");
  const display = document.querySelector(".display");

  let [m, h, s, ms, interval] = [0, 0, 0, 0, 0];

  start.addEventListener("click", () => {
    if (interval !== 0) return;
    interval = setInterval(setTime, 0);
  });

  const displayTime = () => {
    const hours = String(h).padStart(2, "0");
    const minutes = String(m).padStart(2, "0");
    const seconds = String(s).padStart(2, "0");
    const microSeconds = String(ms).padStart(3, "0");

    const timeString = `
    <div>
      ${hours} : ${minutes} : ${seconds} : ${microSeconds}
    </div>
  `;
    display.innerHTML = "";
    display.insertAdjacentHTML("beforeend", timeString);
  };

  // function to handel setting time
  const setTime = () => {
    ms += 16; // value to determine the microseconds
    if (ms >= 999) {
      s++;
      ms = 0;
      if (s >= 60) {
        m++;
        s = 0;
        if (m >= 60) {
          s++;

          m = 0;
        }
      }
    }
    localStorage.setItem("time", [m, h, s, ms, interval]);
    displayTime();
  };

  // stop function
  stop.addEventListener("click", () => {
    [h, m, s, ms] = [0, 0, 0, 0];
    displayTime();
    pause.innerHTML = "pause";
    clearInterval(interval);
    interval = 0;
    localStorage.setItem("time", [m, h, s, ms, interval]);
  });

  // pause function
  pause.addEventListener("click", () => {
    const paused = pause.innerHTML === "pause";

    if (h === 0 && m === 0 && s === 0 && ms === 0) return;
    if (paused) {
      (pause.innerHTML = "play") && clearInterval(interval);
    } else {
      pause.innerHTML = "pause";
      interval = setInterval(setTime, 0);
    }
  });
  displayTime();
});
