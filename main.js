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
  Isrunning = false;
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
  Isrunning = false;
});
hourPlus.addEventListener("click", () => {
  h++;
  hours.innerHTML = setZero(h);
  startIsDisabled = false;
  Isrunning = false;
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
  startIsDisabled = false;
  Isrunning = false;
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
  startIsDisabled = false;
  Isrunning = false;
});
hourMinus.addEventListener("click", () => {
  if (h > 0) {
    h--;
  } else {
    h = 0;
  }
  hours.innerHTML = setZero(h);
  checkFigrures(s, m, h);
  startIsDisabled = false;
  Isrunning = false;
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
            if (
              container.classList.contains("conteinerSV") &&
              s == 0 &&
              m == 0 &&
              h == 0
            ) {
              timer.classList.remove("anim");
              dotsss.forEach((dot) => {
                dot.classList.add("animSV");
              });
            } else {
              timer.classList.add("anim");
              dotsss.forEach((dot) => {
                dot.classList.remove("animSV");
              });
            }
            finishtxt.classList.remove("none");
            animbtn.classList.remove("none");
          }
        }
      }
      seconds.innerHTML = setZero(s);
      minutes.innerHTML = setZero(m);
      hours.innerHTML = setZero(h);
      //
      hh.style.strokeDashoffset = 570 - (570 * h) / 12;
      mm.style.strokeDashoffset = 570 - (570 * m) / 60;
      ss.style.strokeDashoffset = 570 - (570 * s) / 60;
      sdot.style.transform = `rotate(${s * 6}deg)`;
      mdot.style.transform = `rotate(${m * 6}deg)`;
      hdot.style.transform = `rotate(${h * 12}deg)`;
      //
    }, 1000);
    start.classList.add("none");
    pauseResume.classList.remove("none");
    minorbtn.forEach((btn) => btn.classList.add("none"));
    pauseResume.innerHTML = "Pause";
    Isrunning = true;
    startIsDisabled = true
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
  pauseResume.classList.add("none");
  minorbtn.forEach((btn) => btn.classList.remove("none"));
  startIsDisabled = false;
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
            if (
              container.classList.contains("conteinerSV") &&
              s == 0 &&
              m == 0 &&
              h == 0
            ) {
              timer.classList.remove("anim");
              dotsss.forEach((dot) => {
                dot.classList.add("animSV");
              });
            } else {
              timer.classList.add("anim");
              dotsss.forEach((dot) => {
                dot.classList.remove("animSV");
              });
            }
            finishtxt.classList.remove("none");
            animbtn.classList.remove("none");
          }
        }
      }
      seconds.innerHTML = setZero(s);
      minutes.innerHTML = setZero(m);
      hours.innerHTML = setZero(h);
      hh.style.strokeDashoffset = 570 - (570 * h) / 12;
      mm.style.strokeDashoffset = 570 - (570 * m) / 60;
      ss.style.strokeDashoffset = 570 - (570 * s) / 60;
      sdot.style.transform = `rotate(${s * 6}deg)`;
      mdot.style.transform = `rotate(${m * 6}deg)`;
      hdot.style.transform = `rotate(${h * 12}deg)`;
    }, 1000);
    minorbtn.forEach((btn) => btn.classList.add("none"));
    Isrunning = true;
  }
});
animbtn.addEventListener("click", () => {
  timer.classList.remove("anim");
  dotsss.forEach((dot) => {
    dot.classList.remove("animSV");
  });
  finishtxt.classList.add("none");
  cencel.classList.remove("none");
  start.classList.remove("none");
  pauseResume.classList.add("none");
  minorbtn.forEach((btn) => btn.classList.remove("none"));
  animbtn.classList.add("none");
  Isrunning = false;
});
// I have an Idea to add some features and for that reason I have changed HTML and CSS already to add second design. Starting here, we will be working on the second version design of the clockwise, we may work differently as the above code was written rouhgly 3 month ago/
const container = document.querySelector(".conteiner");
const dots = document.querySelectorAll(".dots");
const numbers = document.querySelectorAll("#numbers");
const buttons = document.querySelectorAll(".buttons");
const h1 = document.querySelectorAll("h1");
const mainbtn = document.querySelectorAll(".mainbtn");
const svg = document.querySelectorAll("svg");
const circle = document.querySelectorAll("circle");
const main = document.querySelector(".main");
//
const hh = document.querySelector("#hour");
const mm = document.querySelector("#minute");
const ss = document.querySelector("#second");
const hdot = document.querySelector(".hdot");
const mdot = document.querySelector(".mdot");
const sdot = document.querySelector("#sdot");
const dotsss = document.querySelectorAll(".dotsss");
//

function mainVersion() {
  timer.classList.remove("timerSV");
  container.classList.remove("conteinerSV");
  minorbtn.forEach((btn) => {
    btn.classList.remove("minorbtnSV");
  });
  dots.forEach((dot) => {
    dot.classList.remove("dotsSV");
  });
  numbers.forEach((number) => {
    number.classList.remove("clockNumbers");
  });
  buttons.forEach((button) => {
    button.classList.remove("buttonsSV");
  });
  h1.forEach((h1) => {
    h1.classList.remove("h1");
  });
  mainbtn.forEach((mainbtn) => {
    mainbtn.classList.remove("innerSV");
  });
  main.classList.remove("mainSV");
  svg.forEach((svg) => {
    svg.classList.remove("add");
  });
  dotsss.forEach((dot) => {
    dot.classList.remove("add");
  });
  if (!Isrunning) {
    if (!animbtn.classList.contains("none")) {
      timer.classList.add("anim");
      dotsss.forEach((dot) => {
        dot.classList.remove("animSV");
      });
    }
  } else {
    timer.classList.remove("anim");
    dotsss.forEach((dot) => {
      dot.classList.remove("animSV");
    });
  }
}
function secondVersion() {
  timer.classList.add("timerSV");
  container.classList.add("conteinerSV");
  minorbtn.forEach((btn) => {
    btn.classList.add("minorbtnSV");
  });
  dots.forEach((dot) => {
    dot.classList.add("dotsSV");
  });
  numbers.forEach((number) => {
    number.classList.add("clockNumbers");
  });
  buttons.forEach((button) => {
    button.classList.add("buttonsSV");
  });
  h1.forEach((h1) => {
    h1.classList.add("h1");
  });
  mainbtn.forEach((mainbtn) => {
    mainbtn.classList.add("innerSV");
  });
  main.classList.add("mainSV");
  svg.forEach((svg) => {
    svg.classList.add("add");
  });
  dotsss.forEach((dot) => {
    dot.classList.add("add");
  });
  if (!Isrunning) {
    if (!animbtn.classList.contains("none")) {
      timer.classList.remove("anim");
      dotsss.forEach((dot) => {
        dot.classList.add("animSV");
      });
    }
  } else {
    timer.classList.remove("anim");
    dotsss.forEach((dot) => {
      dot.classList.remove("animSV");
    });
  }
}
window.addEventListener("click", (e) => {
  let target = e.target;
  if (target.classList.contains("mainVersion")) {
    mainVersion();
  } else if (target.classList.contains("secondVersion")) {
    secondVersion();
  }
});
