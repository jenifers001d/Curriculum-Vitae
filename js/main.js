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
let lightness = 60;
let baseColor;

function changeTheme() {
    if (nextTheme == "light") {
        document.body.style.backgroundColor = "#fffcee";
        document.body.style.color = "rgba(0, 0, 0, 0.95)";
        sliderBtn.removeAttribute("class");
        sliderBtn.setAttribute("class", "slider round light");
        githubC.removeAttribute("class");
        githubC.setAttribute("class", "light");
        for (let i = 0; i < worksC.length; i++) {
            worksC[i].removeAttribute("class");
            worksC[i].setAttribute("class", "light");
        }
        hrC[0].style.borderBottom = "solid 4px #EF87E8";
        decC[0].style.background = "linear-gradient(135deg, #cc33c2, #EF87E8 10%, #fff6c7 90%)";
        for (let i = 0; i < head2C.length; i++) {
            head2C[i].removeAttribute("class");
            head2C[i].setAttribute("class", "light");
        }
        for (let i = 0; i < barC.length; i++) {
            barC[i].style.border = "solid 2px #db57d2";
            valC[i].style.backgroundColor = "#db57d2";
        }
        lightness = 60;
        baseColor = "hsl(304, 65%, " + lightness + "%)";
        for (let j = 0; j < eduYearC.length; j++) {
            eduYearC[j].style.borderColor = baseColor;
            lightness += 5;
            baseColor = "hsl(304, 65%, " + lightness + "%)";
        }
        lightness = 60;
        baseColor = "hsl(304, 65%, " + lightness + "%)";
        for (let k = 0; k < workYearC.length; k++) {
            workYearC[k].style.borderColor = baseColor;
            lightness += 5;
            baseColor = "hsl(304, 65%, " + lightness + "%)";
        }
        nextTheme = "black";
    } else if (nextTheme == "black") {
        document.body.style.backgroundColor = "#1d2d62";
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
        decC[0].style.background = "linear-gradient(135deg, #FF5F5F, #FFFFAE)";
        for (let i = 0; i < head2C.length; i++) {
            head2C[i].removeAttribute("class");
            head2C[i].setAttribute("class", "black");
        }

        for (let i = 0; i < barC.length; i++) {
            barC[i].style.border = "solid 2px #FF7168";
            valC[i].style.backgroundColor = "#FF7168";
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
