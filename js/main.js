let nextTheme = "black";
let btn = document.getElementsByClassName("slider");
btn[0].addEventListener("click", changeTheme);

let sliderBtn = document.querySelector("span.slider");
let githubC = document.getElementById("myGitHub");
let hrC = document.getElementsByTagName("hr");
let decC = document.getElementsByClassName("decoration");
let head2C = document.getElementsByTagName("h2");
let barC = document.getElementsByClassName("bar");
let valC = document.getElementsByClassName("value");
let worksC = document.querySelectorAll(".listWorks a");
let eduYearC = document.querySelectorAll(".listEducation li.year ul");
let workYearC = document.querySelectorAll(".listExperience li.year ul");

let lightBackgroundColor = "#fffcee";
let lightBarColor = "#9f6b38";
let blackBackgroundColor = "#1d2d62";
let blackBarColor = "#ff7066";
let lightness;
let baseColor;

function changeTheme() {
    if (nextTheme == "light") {
        document.body.style.backgroundColor = lightBackgroundColor;
        document.body.style.color = "rgba(0, 0, 0, 0.95)";
        sliderBtn.removeAttribute("class");
        sliderBtn.setAttribute("class", "slider round light");
        githubC.removeAttribute("class");
        githubC.setAttribute("class", "light");
        for (let i = 0; i < worksC.length; i++) {
            worksC[i].removeAttribute("class");
            worksC[i].setAttribute("class", "light");
        }
        hrC[0].style.borderBottom = "solid 4px " + lightBarColor;
        decC[0].style.background = "linear-gradient(135deg, #9b6236, #ffffad)";
        for (let i = 0; i < head2C.length; i++) {
            head2C[i].removeAttribute("class");
            head2C[i].setAttribute("class", "light");
        }
        for (let i = 0; i < barC.length; i++) {
            barC[i].style.border = "solid 2px " + lightBarColor;
            valC[i].style.backgroundColor = lightBarColor;
        }
        lightness = 42;
        baseColor = "hsl(30, 48%, " + lightness + "%)";
        for (let j = 0; j < eduYearC.length; j++) {
            eduYearC[j].style.borderColor = baseColor;
            lightness += 5;
            baseColor = "hsl(30, 48%, " + lightness + "%)";
        }
        lightness = 42;
        baseColor = "hsl(30, 48%, " + lightness + "%)";
        for (let k = 0; k < workYearC.length; k++) {
            workYearC[k].style.borderColor = baseColor;
            lightness += 5;
            baseColor = "hsl(30, 48%, " + lightness + "%)";
        }
        nextTheme = "black";
    } else if (nextTheme == "black") {
        document.body.style.backgroundColor = blackBackgroundColor;
        document.body.style.color = "rgba(255, 255, 255, 0.95)";
        sliderBtn.removeAttribute("class");
        sliderBtn.setAttribute("class", "slider round black");
        githubC.removeAttribute("class");
        githubC.setAttribute("class", "black");
        for (let i = 0; i < worksC.length; i++) {
            worksC[i].removeAttribute("class");
            worksC[i].setAttribute("class", "black");
        }
        hrC[0].style.borderBottom = "solid 4px #FF7168";
        decC[0].style.background = "linear-gradient(135deg, #ff6161, #ffffad)";
        for (let i = 0; i < head2C.length; i++) {
            head2C[i].removeAttribute("class");
            head2C[i].setAttribute("class", "black");
        }

        for (let i = 0; i < barC.length; i++) {
            barC[i].style.border = "solid 2px " + blackBarColor;
            valC[i].style.backgroundColor = blackBarColor;
        }
        lightness = 70;
        baseColor = "hsl(4, 100%, " + lightness + "%)";
        for (let j = 0; j < eduYearC.length; j++) {
            eduYearC[j].style.borderColor = baseColor;
            lightness += 5;
            baseColor = "hsl(4, 100%, " + lightness + "%)";
        }
        lightness = 70;
        baseColor = "hsl(4, 100%, " + lightness + "%)";
        for (let k = 0; k < workYearC.length; k++) {
            workYearC[k].style.borderColor = baseColor;
            lightness += 5;
            baseColor = "hsl(4, 100%, " + lightness + "%)";
        }
        nextTheme = "light";
    }

}
