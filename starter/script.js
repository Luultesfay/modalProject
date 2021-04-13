'use strict';
/*
// this is  a Modal Project
// we are manipulating the css using java script here
//we first write the query selectors and create variable to hold it
// we create the variables b/c we gonna use it repetedely in our code and it is use full
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal'); //querySelectorAll selects all the show modals

console.log(btnOpenModal);

for (
  // this for loop uses to read all the buttons
  let i = 0;
  i < btnOpenModal.length;
  i++
)
  //this part open the pop up window by removing the hidden class
  btnOpenModal[i].addEventListener('click', function () {
    // here addEventListner method is used to listen the events  and its very useful
    console.log('button clicked'); //here we are listening the clicked button and read it to the console
    modal.classList.remove('hidden'); //we are removed the class hidden from the css that hides the paragraph
    overlay.classList.remove('hidden');//we remove the hidden class from  overly class in css
  });

//this part closed the poped up window that opend earler by the above code ..now we added the hidden class
btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

//this part of the code closes the pops up window when we click outside of the button and removes the overlay background
// wen we click in the overlay area then the window closed

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
*/

// refactoring the above code and make it more redable and re size
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal'); //querySelectorAll selects all the show modals

const colsedModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModel = function () {
  modal.classList.remove('hidden'); //we are removed the class hidden from the css that hides the paragraph
  overlay.classList.remove('hidden');
  console.log('button clicked'); //here we are listening the clicked button and read it to the console
};

for (
  // this for loop uses to read all the buttons
  let i = 0;
  i < btnOpenModal.length;
  i++
)
  //this part open the pop up window by removing the hidden class
  btnOpenModal[i].addEventListener('click', openModel); // here addEventListner method is used to listen the events  and its very useful

//this part closed the poped up window that opend earler by the above code ..now we added the hidden class
btnCloseModal.addEventListener('click', colsedModel);

//this part of the code closes the pops up window when we cleck outside of the button and removes the overlay background
// wen we click in the overlay area then the window closed

overlay.addEventListener('click', colsedModel);

//this code is the third way to close the pop up window using the keywords eg ESC

//document.addEventListener('keydown', function () {
// console.log('key was clicked'); //this reads when any key is pressed and we dont now which key  is pressed
//});

/*
document.addEventListener('keydown', function (e) {
  console.log(e.key); //this reads when any key is pressed and we know which one is pressed
});
*/

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    //when we press escape key the pop up message closed
    colsedModel(); // we call this method becouse the class is not hidden which is visible now we closed by close model
  }
});
