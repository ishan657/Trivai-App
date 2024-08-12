const Meter = document.getElementById("meter");
const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");
const red = document.querySelector(".red");
const URL = opentdb.com/api.php?amount=2&category=25&difficulty=hard&type=multiple;
  const meterValue = Meter.value;

  if (meterValue <= 33) {
    section1.style.backgroundColor = "#66BB6A";
    section2.style.backgroundColor = "#66BB6A";
    green.style.transform = "scale(1.5)";
    yellow.style.transform = "scale(1)";
    red.style.transform = "scale(1)";
  } else if (meterValue <= 66) {
    section1.style.backgroundColor = "#FBC02D";
    section2.style.backgroundColor = "#FBC02D";
    green.style.transform = "scale(1)";
    yellow.style.transform = "scale(1.5)";
    red.style.transform = "scale(1)";
  } else {
    section1.style.backgroundColor = "#FF5722";
    section2.style.backgroundColor = "#FF5722";
    green.style.transform = "scale(1)";
    yellow.style.transform = "scale(1)";
    red.style.transform = "scale(1.5)";
  }
};

section1.style.transition = "background-color 0.5s ease";
section2.style.transition = "background-color 0.5s ease";
green.style.transition = "transform 0.5s ease";
yellow.style.transition = "transform 0.5s ease";
red.style.transition = "transform 0.5s ease";
