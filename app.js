let number = 0;

let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');
let button4 = document.querySelector('#button4');
let button5 = document.querySelector('#button5');
let submit = document.querySelector('#submit');

let showSection = () => {
    hideActiveSection
    document.querySelector('.section').classList.add('active');
};

let changeNumber1 = () => {
    number = 1;
    console.log(number);
   
}

let changeNumber2 = () => {
    number = 2;
    console.log(number);
}

let changeNumber3 = () => {
    number = 3;
    console.log(number);
}

let changeNumber4 = () => {
    number = 4;
    console.log(number)
}

let changeNumber5 = () => {
    number = 5;
    console.log(number)
}

let showThanks = () => {
    section1.classList.remove('active');
    section2.classList.add('active');
    console.log(number); 
    document.getElementById("number").innerHTML = number;
};

submit.addEventListener('click', showThanks);
button1.addEventListener('click', changeNumber1);
button2.addEventListener('click', changeNumber2);
button3.addEventListener('click', changeNumber3);
button4.addEventListener('click', changeNumber4);
button5.addEventListener('click', changeNumber5);