"use strict";
// "use strict";


// alert("Help me! I'm learning GULP!");

// function sumInput() {
//     let arr = [];
//     let input = prompt("number?", "");
    
//     while(input){
//         // if(isNaN(+input)){ // Infinity станет Infinity и добавится в массив
//         if(!isFinite(+input)){ // 
//             break;
//         } else {
//             arr.push(+input);
//         }        
//         input = prompt("number?", "");
//     }
//     if (arr.length >= 1){
//         console.log(arr);
//         return arr.reduce(function(a, b){return a+b;});
//     }
//     return "Ooops";
// }

// console.log(sumInput());

// let arr = [-1, 2, 3, -9];


// function getMaxSubSum(array) {
//     let maxSub = 0;
//     let partialSum = 0;
//     for (let i of array){
//         partialSum += i;
//         maxSub = Math.max(partialSum, maxSub);
//         if (partialSum < 0){
//             partialSum = 0;
//         }
//     }    
//     return maxSub;
// }

// console.log(getMaxSubSum(arr));


// function printNumbers(from, to){
//     let i = from;
//     setTimeout(function go(){console.log(i);
//     if (i < to) {
//         setTimeout(go, 1000);
//     }
//     i++;
//     }, 1000);
    
// }
// printNumbers(1, 5);


// function printNumbers(from, to){
//     setTimeout(function go(){
//         console.log(from);
//         if (from < to) {
//             setTimeout(go, 1000);
//         }
//         from++;
//         }, 1000);
    
// }
// printNumbers(1, 5);



// function printNumbers(from, to){
//     let intervalId = setInterval(function() {
//         console.log(from);
//         from++;
//         if (from > to){
//         clearInterval(intervalId);
//     }         
//     }, 1000);
       
// }
// printNumbers(1, 5);


// function printNumbers(from, to){
//     function go() {
//         console.log(from);
//         if (from < to) {
//         setTimeout(go, 1000);
//         from++;
//     }}
//     go();
    
// }
// printNumbers(1, 5);


// методы массивов
// 1
// function camelize(str){
//     let splStr = str.split("-");
//     let newStr = [];
//     splStr.forEach(item => {
//         (splStr.indexOf(item)) ? newStr.push(((item[0].toUpperCase()) + item.slice(1))) : newStr.push(item);
//     });
//     return newStr.join('');

// }

// function camelize(str){
//     return str.split("-")
//         .map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1))
//         .join("");
// }

// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));


// 2
// function filterRange(arr, a, b){ 
//     return arr.filter(item => (item >= a && item <= b));
// }

// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// console.log(filtered);
// console.log(arr);

// 3

// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i ++) {
//         let value = arr[i];
//         if (value < a || value > b) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }

// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);
// let arr2 = [5, 3, 33, 16, 17, 8, 45];
// filterRangeInPlace(arr2, 5, 17);
// console.log(arr);
// console.log(arr2);


// 4

// let arr = [5, 2, 1, -10, 8, 12, 25, 34];
// arr.sort((a,b)=>(a-b));
// arr.reverse();

// console.log(arr); // 8, 5, 2, 1, -10


// 5

// let arr = ["HTML", "JavaScript", "CSS"];
// function copySorted(arr) {
//     return [...arr].sort();
// }
// let sorted = copySorted(arr);
// console.log(sorted);
// console.log(arr);


// 6
// function Calculator() {
//     this.operators = {
//         "+": (a, b)=>(a + b),
//         "-": (a, b)=>(a - b),
//         "*": (a, b)=>(a * b),
//         "/": (a, b)=>(a / b),
//         "**": (a, b)=>(a ** b),
//     };

//     this.calculate = (str)=>{
//         let arrSplit = str.split(" ");
//         let a = +arrSplit[0];
//         let oper = arrSplit[1];
//         let b = +arrSplit[2];
//         if (!this.operators[oper]){return "invalid operator";}
//         return this.operators[oper](a, b);

//     };   
// }
// let calc = new Calculator;
// console.log( calc.calculate("3 + 7") ); // 10
// console.log( calc.calculate("17 - 58") ); 
// console.log( calc.calculate("117 - 58") ); 
// console.log( calc.calculate("117 * 58") ); 
// console.log( calc.calculate("117 / 58") ); 
// console.log( calc.calculate("2 ** 3") ); 
// console.log( calc.calculate("2 *!* 3") ); 


// 7
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name);
// console.log(names); // Вася, Петя, Маша


// 8

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
// let sasha = { name: "Саша", surname: "Барсук", id: 4 };

// let users = [ vasya, petya, masha, sasha ];

// let usersMapped = users.map(item => (
//         {
//             fullName: item.name + " " + item.surname,
//             id: item.id,
//         }
// )); 


// console.log( usersMapped[0].id ); // 1
// console.log( usersMapped[0].fullName ); // Вася Пупкин
// console.log( usersMapped[3].fullName ); 
// console.log( usersMapped ); 



// 9

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// function sortByAge(users) {
//     users.sort((a, b) => (a.age - b.age)); 
// }

// sortByAge(arr);

// console.log(arr[0].name); // Вася
// console.log(arr[1].name); // Маша
// console.log(arr[2].name); // Петя


// 10 Тасование Фишера — Йетса

// let arr = [1, 2, 3];

// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         let tmp = array[i];
//         let j = Math.floor(Math.random() * (i + 1));
//         array[i] = array[j];
//         array[j] = tmp;
//     }
// }

// shuffle(arr);
// console.log(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// console.log(arr);
// // arr = [2, 1, 3]


// 11

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// function getAverageAge(users){
//     return users.reduce((a, b) => a + b.age, 0) / users.length;
// }

// console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28


//12


// function unique(arr) {
//     let set = new Set(arr);
//     return [...set];
//   }
  

//   let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
//   ];
  
//   console.log( unique(strings) ); // кришна, харе, :-O


// Функции Конструкторы
// const num = new Number(3);
// console.log(num);
// const fun = new Function(3);
// console.log(fun);


// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;    
//     // this.hello = ()=>(`Hello ${this.name}`);    
//     this.hello = function(){
//         console.log(`Hello, ${this.name}`);
//     };    
// }

// const ivan = new User("Ivan", 1);
// const alex = new User("Aleksandr", 3);
// const oleg = new User();
// console.log(ivan.name);
// console.log(ivan.id);
// console.log(ivan.human);
// console.log(ivan);
// console.log(ivan.hello());
// ivan.hello();

// console.log(alex.name);
// console.log(alex.id);
// console.log(alex.human);
// console.log(alex);
// console.log(oleg.name);
// console.log(oleg.id);
// console.log(oleg.human);
// console.log(oleg);



// alex.exit();
// User.prototype.exit = function () {
//     console.log(`User ${this.name} logged out`);    
// };

// const lida = new User("Lida", 5);
// lida.exit();
// alex.exit();


// //Date
//1
// function getLastDayOfMonth(year, month) {
// //_____________________________
//     // let date = new Date(year, month + 1, 0);
//     // return date.getDate();
// //________________________________________
//     const date = new Date(year, month);
//     let count = 0;
//     while (date.getMonth() == month) {
//         date.setDate(date.getDate() + 1);
//         count++;
//     }
//     return count;
// }

// console.log(getLastDayOfMonth(2012, 1));
// console.log(getLastDayOfMonth(2013, 1));
// console.log(getLastDayOfMonth(2012, 0));

// //2
// function getSecondsToday() {
//     const date  = new Date();

//     return ((date.getHours()*60*60)+ date.getMinutes()*60 + date.getSeconds());
    
// }
// console.log(getSecondsToday());

// //3
// function getSecondsToTomorrow(){
//     const date = new Date();
//     const tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate()+1, 0, 0, 0);
//     return Math.floor((tomorrow.getTime() - date.getTime())/1000);
// }
// console.log(getSecondsToTomorrow());

// //4
// function formatDate(date) {
//     const delta = new Date() - date;
//     if (delta < 1000){
//         return "right now";
//     } else if (delta >= 1000 && delta < 60000){
//         return `${Math.floor(delta / 1000)} seconds ago`;
//     } else if (delta >= 60000 && delta < 3600000) {
//         return `${Math.floor(delta / 60000)} minutes ago`;
//     } else {
//         const day = date.getDate();
//         const month =  date.getMonth() < 9 ? "0" + (date.getMonth() + 1): date.getMonth()+1;       
//         const year = (String(date.getFullYear())).slice(2);
//         let hours = date.getHours() < 10 ? "0" + date.getHours(): date.getHours();        
//         const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        

//         return `${day}.${month}.${year} ${hours}:${minutes}`;
//     }
    
// }
// const date = new Date("2021-06-18");
// const date2 = new Date("1915-11-18");
// const date3 = new Date(2021, 8, 7, 22, 13);
// console.log(formatDate(date));
// console.log(formatDate(date2));
// console.log(formatDate(date3));


// // Map Set
// // 1
// function unique(arr) {
//     const set = new Set(arr);
//     return [...set];
//     // return Array.from(new Set(arr));
// }
// const arr = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// console.log(unique(arr));


// // 2
// function aclean(arr) {
//     let map = new Map();
//     arr.forEach(i => { 
//         map.set(i.toLowerCase().split("").sort().join(""), i);
//     });
//     return Array.from(new Set(map.values()));

// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares", "era", "ear"];
// console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"


// // 3

// const salaries = {
//         "John": 100,
//         "Pete": 300,
//         "Mary": 250
//     };

// function  sumSalaries(salaries) {
//     return Object.values(salaries).reduce((a,b)=>a+b, 0);    
// }
// console.log(sumSalaries(salaries));


// // 4
// let user = {
//     name: 'John',
//     age: 30,
//     car: "bmw",
//   };
  
// function count(obj) {
//     // let count = 0;
//     // Object.keys(obj).forEach(i=>count++);
//     // return count;    
//     return Object.keys(obj).length;
// }

// console.log( count(user) ); // 2



// ДЕСТРУКТУРИЗАЦИЯ

// // 1
// let user = {
//     name: "John",
//     years: 30
//   };
// const {name, years:age, isAdmin=false} = user;
// console.log(name);
// console.log(age);
// console.log(isAdmin);


// // 2
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250,
//     "Garry": 750,
//   };

// function topSalary(salaries) {
//     let maxSal = 0;
//     let maxEmpl = null;
//     for (let [key, value] of Object.entries(salaries)) {
//         if (value > maxSal) {
//             maxSal = value;
//             maxEmpl = key;
//         }
//     }
//     return maxEmpl; 
// }

// console.log(topSalary(salaries));



function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = 
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector("body").classList.add("webp");
    } else {
        document.querySelector("body").classList.add("no-webp");
    }
});


function ibg(){

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
    }
    
ibg();


// // Timer //disabled now

// const deadLine = "2021-09-30";

// function getTimeRamaining(endtime) {
//     const t = Date.parse(endtime) - Date.parse(new Date());
//     const days = Math.floor(t / (1000*60*60*24));
//     const hours = Math.floor((t / (1000*60*60)) % 24);
//     const minutes = Math.floor((t / (1000*60)) % 60);
//     const seconds = Math.floor((t / (1000)) % 60);

//     return {
//         "total": t,
//         days,
//         hours,
//         minutes,
//         seconds,
//     };
    
// }

// function addZero(num) {
//     if (num >= 0 && num < 10){
//         return `0${num}`;
//     } else {
//         return num;
//     }
    
// }

// function setClock(selector, endtime) {
//     const timer = document.querySelector(selector);
//     const days = timer.querySelector("#days");
//     const hours = timer.querySelector("#hours");
//     const minutes = timer.querySelector("#minutes");
//     const seconds = timer.querySelector("#seconds");
//     const timeInterval = setInterval(updateClock, 1000);
//     updateClock();

//     function updateClock() {
//         const t = getTimeRamaining(endtime);
//         days.innerHTML = addZero(t.days);
//         hours.innerHTML = addZero(t.hours);
//         minutes.innerHTML = addZero(t.minutes);
//         seconds.innerHTML = addZero(t.seconds);
//     }
 
// }

// setClock(".timer", deadLine);
// document.querySelector(".timer").style.display = "none";

//__________________________________________________________________________
//______________________________________________________________________
// Scroll

const topBtn = document.querySelectorAll(".to_top");
const page = document.querySelector(".page");


//Scroll to top
let t; 
function scrolltop() { 
    let top = Math.max(document.body.scrollTop, page.scrollTop); 
    if (top > 0) { 
        // page.scrollTo(0, Math.floor(top/1.4)); 
        page.scrollTo({
            top: Math.floor(top/1.4),
            behavior: "smooth"
        });

        t = setTimeout(scrolltop, 30); 
    } else { 
        clearTimeout(t); 
    } 
    return false; 
}

// Scroll top click
topBtn.forEach(item => {
    item.addEventListener("click", (e) => {
        if (!document.body.classList.contains("_touch")){
        e.preventDefault();
        scrolltop();
        }
    });
});


//------------------------------------------------------------------------------------
//Scroll to Elements--------------------------------------------------------------------
let scrollToIdTimerId;

//Old Working Scroll Func--------------------------------------------------------------------
//--------------------------------------------------------------------------------------
// For chrome

function scrollToId(id) {
    scrollToIdFunc();
    function scrollToIdFunc() {
        if (document.documentElement.scrollHeight <= 1040) {
            const point = document.querySelector(id).getBoundingClientRect().top;            
            if (point > 800) { 
                // page.scrollTop = Math.floor((page.scrollTop + 10) * 1.25);
                page.scrollTo({
                    top: Math.floor((page.scrollTop + 10) * 1.25),
                    behavior: "smooth",

                });
                scrollToIdTimerId = setTimeout(scrollToIdFunc, 20); 
    
            } else if(point > 1 && point < 800){
                // page.scrollTop = Math.floor(page.scrollTop + 75);
                page.scrollTo({
                    top: Math.floor(page.scrollTop + 10),
                    behavior: "smooth",
                });
                scrollToIdTimerId = setTimeout(scrollToIdFunc, 5); 
    
            } else { 
                clearTimeout(scrollToIdTimerId); 
            } 
            return false; 
        } else {
            const point = document.querySelector(id).getBoundingClientRect().top - (document.documentElement.scrollHeight - 1040);
            if (point > 800) { 
                // page.scrollTop = Math.floor((page.scrollTop + 10) * 1.25);
                page.scrollTo({
                    top: Math.floor((page.scrollTop + 10) * 1.25),
                    behavior: "smooth",

                });
                scrollToIdTimerId = setTimeout(scrollToIdFunc, 20);
            } else if(point > 0 && point < 800){
                // page.scrollTop = Math.floor(page.scrollTop + 20);
                page.scrollTo({
                    top: Math.floor(page.scrollTop + 20),
                    behavior: "smooth",

                });
                scrollToIdTimerId = setTimeout(scrollToIdFunc, 10); 
            } else { 
                clearTimeout(scrollToIdTimerId); 
            } 
            return false; 
        }
    }  
}

//-------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------




//Scroll click
const navElements = document.querySelectorAll("[data-nav]");

//old-----------------------------------------------
// navElements.forEach(elem => {
//     elem.addEventListener("click", (e) => {
//         e.preventDefault();
//         const idToScrollTo = e.target.getAttribute("data-nav");
//         scrollToId(idToScrollTo);
//     });
// });
//----------------------------------------------------------


navElements.forEach(elem => {
    elem.addEventListener("click", (e) => {
        if (!document.body.classList.contains("_touch")){
            e.preventDefault();
            const elemScrollTo = document.querySelector(e.target.getAttribute("data-nav"));
            const idToScrollTo = e.target.getAttribute("data-nav");
            const point = elemScrollTo.getBoundingClientRect().top + page.scrollTop - document.querySelector("header").offsetHeight;
            if (navigator.userAgent.match(/Chrome/i)){
                scrollToId(idToScrollTo);
    
            } else {
                page.scrollTo({
                    top: point,
                    behavior: "smooth",
                });
            }
        }


    });
});





// Slider and Open / Close Photo
function photos() {
    let slideIndex = 1;
    const photoContainer = document.querySelector(".wrapper");
    const slides = document.querySelectorAll(".content_row_item");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    next.style = "-webkit-tap-highlight-color: transparent;";
    prev.style = "-webkit-tap-highlight-color: transparent;";
    slides.forEach(i=>i.style = "-webkit-tap-highlight-color: transparent;");

    const photoPopup = document.createElement("div");
    photoPopup.classList.add("popup_photo");
    photoPopup.style = "-webkit-tap-highlight-color: transparent;";

    const bigPhoto = document.createElement("img");
    const bigPhotoWrapper = document.createElement("div");
    bigPhotoWrapper.classList.add("bigPhotoWrapper");
    bigPhotoWrapper.style = "-webkit-tap-highlight-color: transparent;";
    bigPhoto.style = "-webkit-tap-highlight-color: transparent;";

    const closeX = document.createElement("div");
    closeX.classList.add("closeX");
    closeX.style = "-webkit-tap-highlight-color: transparent;";

    photoContainer.appendChild(photoPopup);
    photoPopup.appendChild(bigPhotoWrapper);
    photoPopup.appendChild(prev);
    photoPopup.appendChild(next);
    bigPhotoWrapper.appendChild(bigPhoto);
    bigPhotoWrapper.appendChild(closeX);

    // path to img that was clicked first
    let pathBPh;

// open-close photo____________________
    photoContainer.addEventListener("click", (event) => {
        // event.preventDefault();
        //Open photo
        if (event.target && event.target.classList.contains("content_row_item")){
            event.preventDefault();
            next.style.display = "block";
            prev.style.display = "block";
            photoPopup.style.display = "flex";
            photoPopup.style.overflow = "hidden";
            pathBPh = event.target.getAttribute("data-photo");
            bigPhoto.setAttribute("src", pathBPh);
            bigPhoto.classList.add("fadeOne");

            slides.forEach((item, index) => {
            if (pathBPh == item.getAttribute("data-photo")){
                slideIndex = index;
            }
            }); 

        }
        //Close photo
        if (event.target && event.target.matches("div.popup_photo")){
            photoPopup.style.display = "none";
            photoPopup.style.overflow = "";
            bigPhoto.classList.remove("fadeTwo");
        }
    });

    //Close photo
    closeX.addEventListener("click", () =>{
        photoPopup.style.display = "none";
        photoPopup.style.overflow = "";
        bigPhoto.classList.remove("fadeTwo");
    });
    //___________________________

    //Slider
    next.addEventListener("click", (event)=>{
        if (slideIndex+1 < slides.length){
            bigPhoto.setAttribute("src", slides[slideIndex+1].getAttribute("data-photo"));
            slideIndex++;
            bigPhoto.classList.toggle("fadeOne");
            bigPhoto.classList.toggle("fadeTwo");

        } else {
            slideIndex = 0;
            bigPhoto.setAttribute("src", slides[slideIndex].getAttribute("data-photo"));
            bigPhoto.classList.toggle("fadeOne");
            bigPhoto.classList.toggle("fadeTwo");
        }
    });

    prev.addEventListener("click", (event)=>{
        if (slideIndex > 0){
            bigPhoto.setAttribute("src", slides[slideIndex-1].getAttribute("data-photo"));
            slideIndex--;
            bigPhoto.classList.toggle("fadeOne");
            bigPhoto.classList.toggle("fadeTwo");
        } else {
            slideIndex = slides.length - 1;
            bigPhoto.setAttribute("src", slides[slideIndex].getAttribute("data-photo"));
            bigPhoto.classList.toggle("fadeOne");
            bigPhoto.classList.toggle("fadeTwo");
        }
    });

}

photos();



// Bloom animation BgText
const bgPhotoText = document.querySelector(".static_bg_photo_row_H4_text");

function addBloomToBgPhoto() {
    if (Math.floor(bgPhotoText.getBoundingClientRect().top - document.documentElement.clientHeight <= -200)) {
        bgPhotoText.classList.add("bloom");
        bgPhotoText.style.opacity = "1";
        page.removeEventListener("scroll", addBloomToBgPhoto);
    }     
    return false;
}

page.addEventListener("scroll", addBloomToBgPhoto);

//Animation Portfolio
const contentItems = document.querySelectorAll(".content_row_item");
const content = document.querySelector(".content_row");

function addFadeToContent() {
    if (Math.floor(content.getBoundingClientRect().top - document.documentElement.clientHeight <= -100)) {
        // contentItems.forEach( i => {
        //     i.classList.add("fadeThree");  
        // });
        contentItems.forEach(function(i, index){
            setTimeout(function(){
                i.classList.add("fadeOne");
                                
            }, index*75);
            
        });
   
        page.removeEventListener("scroll", addFadeToContent);
    }     
    return false;
}

page.addEventListener("scroll", addFadeToContent);


//Preloader______________________________________________________
//_______________________________________________________________
window.addEventListener("load", (e)=>{
    const preloader = document.querySelector(".preloader");
    setTimeout(function () {
        // preloader.style.display = "none";   
        preloader.classList.add("preloader_done");     
    }, 500);
});



//Burger__________________________________________________________
//________________________________________________________________

const burger = document.querySelector(".burger");
const menuBody = document.querySelector(".menu_body");
burger.addEventListener("click", showBurgerMenu);
menuBody.addEventListener("click", showBurgerMenu);


function showBurgerMenu() {
    menuBody.classList.toggle("_active");
}



//IsMobile
const isMobile = {
    Android: () => navigator.userAgent.match(/Android/i),
    BlackBerry: () => navigator.userAgent.match(/BlackBerry/i),
    iOS: () => navigator.userAgent.match(/iPhone|iPad|iPod/i),
    Opera: () => navigator.userAgent.match(/Opera Mini/i),
    Windows: () => navigator.userAgent.match(/IEMobile/i),
    any: () => {
        return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
        );
    }
};

if (isMobile.any()) {
    document.body.classList.add("_touch");
} else {
    document.body.classList.add("_pc");
}


//Hide Header

page.addEventListener("scroll", e=>{
    const social = document.querySelector(".social_media_panel");
    const header = document.querySelector("#top");
    const headerMB = document.querySelector(".menu_body");


    if (page.scrollTop > 80){
        if (document.body.classList.contains("_touch")){
            social.classList.add("hidden_head");
        }
        header.classList.add("hidden_head");
        headerMB.classList.add("hidden_head");
    } else {
        headerMB.classList.remove("hidden_head");
        header.classList.remove("hidden_head");
        social.classList.remove("hidden_head");
    }

});


