let timer = document.querySelector(".timer");
let animbtn = document.querySelector(".foranim");
let finishtxt = document.querySelector(".finish");
let secondPlus = document.querySelector(".splus");
let seconds = document.querySelector(".seconds");
let secondMinus = document.querySelector(".sminus");
let minutPlus = document.querySelector(".mplus");
let minutes = document.querySelector(".minutes");
let minutMinus = document.querySelector(".mminus");
let hourPlus = document.querySelector(".hplus");
let hours = document.querySelector(".hours");
let hourMinus = document.querySelector(".hminus");
let minorbtn = document.querySelectorAll(".minorbtn");
let start = document.querySelector(".start");
let pauseResume = document.querySelector(".pause");
let cencel = document.querySelector(".cencel");
let s = 0;
let m = 0;
let h = 0;
let interval;
let startIsDisabled = true;
let Isrunning = false;
function setZero(n) {
  if (n <= 9) {
    return `0${n}`;
  } else {
    return n;
  }
}
function checkFigrures(a, b, c) {
  if (a == 0 && b == 0 && c == 0) {
    startIsDisabled = true;
  } else {
    startIsDisabled = false;
  }
}
secondPlus.addEventListener("click", () => {
  s++;
  if (s > 59) {
    s = 0;
    m++;
  }
  if (m > 59) {
    h++;
    m = 0;
  }
  seconds.innerHTML = setZero(s);
  minutes.innerHTML = setZero(m);
  hours.innerHTML = setZero(h);
  startIsDisabled = false;
});
minutPlus.addEventListener("click", () => {
  m++;
  if (m > 59) {
    h++;
    m = 0;
  }
  minutes.innerHTML = setZero(m);
  hours.innerHTML = setZero(h);
  startIsDisabled = false;
});
hourPlus.addEventListener("click", () => {
  h++;
  hours.innerHTML = setZero(h);
  startIsDisabled = false;
});
secondMinus.addEventListener("click", () => {
  if (s > 0) {
    s--;
  } else {
    if (m > 0) {
      m--;
      s = 59;
    } else {
      if (h > 0) {
        h--;
        m = 59;
        s = 59;
      } else {
        s = 0;
      }
    }
  }
  seconds.innerHTML = setZero(s);
  minutes.innerHTML = setZero(m);
  hours.innerHTML = setZero(h);
  checkFigrures(s, m, h);
});
minutMinus.addEventListener("click", () => {
  if (m > 0) {
    m--;
  } else {
    if (h > 0) {
      h--;
      m = 59;
    } else {
      m = 0;
    }
  }
  minutes.innerHTML = setZero(m);
  hours.innerHTML = setZero(h);
  checkFigrures(s, m, h);
});
hourMinus.addEventListener("click", () => {
  if (h > 0) {
    h--;
  } else {
    h = 0;
  }
  hours.innerHTML = setZero(h);
  checkFigrures(s, m, h);
});
start.addEventListener("click", () => {
  if (!startIsDisabled) {
    interval = setInterval(() => {
      if (s > 0) {
        s--;
      } else {
        if (m > 0) {
          m--;
          s = 59;
        } else {
          if (h > 0) {
            h--;
            m = 59;
            s = 59;
          } else {
            s = 0;
            clearInterval(interval);
            console.log("Timer reached zero!");
            start.classList.add("none");
            pauseResume.classList.add("none");
            cencel.classList.add("none");
            minorbtn.forEach((btn) => btn.classList.add("none"));
            timer.classList.add("anim");
            finishtxt.classList.remove("none");
            animbtn.classList.remove("none");
          }
        }
      }
      seconds.innerHTML = setZero(s);
      minutes.innerHTML = setZero(m);
      hours.innerHTML = setZero(h);
    }, 1000);
    start.classList.add("none");
    pauseResume.classList.remove("none");
    minorbtn.forEach((btn) => btn.classList.add("none"));
    Isrunning = true;
    pauseResume.innerHTML = "Pause";
  }
});
cencel.addEventListener("click", () => {
  clearInterval(interval);
  s = 0;
  m = 0;
  h = 0;
  seconds.innerHTML = setZero(s);
  minutes.innerHTML = setZero(m);
  hours.innerHTML = setZero(h);
  start.classList.remove("none");
  startIsDisabled = true;
  pauseResume.classList.add("none");
  minorbtn.forEach((btn) => btn.classList.remove("none"));
  Isrunning = false;
});
pauseResume.addEventListener("click", () => {
  if (pauseResume.innerHTML == "Pause") {
    pauseResume.innerHTML = "Resume";
  } else {
    pauseResume.innerHTML = "Pause";
  }
  if (Isrunning) {
    clearInterval(interval);
    Isrunning = false;
    minorbtn.forEach((btn) => btn.classList.remove("none"));
  } else {
    interval = setInterval(() => {
      if (s > 0) {
        s--;
      } else {
        if (m > 0) {
          m--;
          s = 59;
        } else {
          if (h > 0) {
            h--;
            m = 59;
            s = 59;
          } else {
            s = 0;
            clearInterval(interval);
            console.log("Timer reached zero!");
            start.classList.add("none");
            pauseResume.classList.add("none");
            cencel.classList.add("none");
            minorbtn.forEach((btn) => btn.classList.add("none"));
            timer.classList.add("anim");
            finishtxt.classList.remove("none");
            animbtn.classList.remove("none");
          }
        }
      }
      seconds.innerHTML = setZero(s);
      minutes.innerHTML = setZero(m);
      hours.innerHTML = setZero(h);
    }, 1000);
    minorbtn.forEach((btn) => btn.classList.add("none"));
    Isrunning = true;
  }
});
animbtn.addEventListener("click", () => {
  timer.classList.remove("anim");
  finishtxt.classList.add("none");
  cencel.classList.remove("none");
  start.classList.remove("none");
  pauseResume.classList.add("none");
  minorbtn.forEach((btn) => btn.classList.remove("none"));
  animbtn.classList.add("none");
});
