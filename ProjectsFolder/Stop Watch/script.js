const pause = document.querySelector(".pause");
const stop = document.querySelector(".stop");
const start = document.querySelector(".start");
const display = document.querySelector(".display");
var [m, h, s, ms] = [0, 0, 0, 0];
var interval = 0;
start.addEventListener("click", () => {
  interval = setInterval(setTime, 0);
});
function setTime() {
  ms += 16;
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

  display.innerHTML = `${String(h).padStart(2, "0")} : ${String(m).padStart(
    2,
    "0"
  )} : ${String(s).padStart(2, "0")} : ${String(ms).padStart(3, "0")}`;
}

stop.addEventListener("click", () => {
  display.innerHTML = "00 : 00 : 00 : 000";
  h = 00;
  m = 0;
  s = 0;
  ms = 0;
  clearInterval(interval);
});
pause.addEventListener("click", () => {
  clearInterval(interval);
});
