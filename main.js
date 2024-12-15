function popup(){
    window.alert("بالعربي متاب وليس متعب 😃")
}


function popup1(){
    window.alert("I hope I meet your expectations😁")
}


function popup2(){
    window.alert("You can contact me from here!😘")
}


function popup3(){
    window.alert("You can change the background from here!")
}


function popup4(){
    window.alert("This is my work, I hope you like it.☺")
}


const body = document.body;
const toggleButton = document.getElementById('toggle-mode');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

//  function flip(cards){
//     const test = cards.querySelector('.test');
//     test.classList.toggle('flipped');
// }
// const body = document.body;
// const toggleButton = document.getElementById('toggle-mode');

// toggleButton.addEventListener('click', () => {
//     body.classList.toggle('dark-mode');
// });