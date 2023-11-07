"use strict";

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let generateBtn = document.querySelector(`.btn-generate`);
let passInput1 = document.querySelector(`.password1`);
let passInput2 = document.querySelector(`.password2`);
let hintEl = document.querySelector(`.hint`);

/*
Once clicked, generate a 15 letter password and loop thru each position 
and get a random value from the array

*/

generateBtn.addEventListener(`click`, function () {
  let pass1 = ``;
  let pass2 = ``;

  for (let i = 0; i < 15; i++) {
    let randChar1 = Math.floor(Math.random() * characters.length);
    let randChar2 = Math.floor(Math.random() * characters.length);
    pass1 += characters[randChar1];
    pass2 += characters[randChar2];
  }

  passInput1.value = pass1;
  passInput2.value = pass2;
  hintEl.classList.remove(`hidden`);
});

passInput1.addEventListener(`click`, function () {
  // Select the text field
  passInput1.select();
  passInput1.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(passInput1.value);

  // Alert the copied text
  alert("Copied password 1 to your clipboard!");
});

passInput2.addEventListener(`click`, function () {
  // Select the text field
  passInput2.select();
  passInput2.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(passInput2.value);

  // Alert the copied text
  alert("Copied password 2 to your clipboard!");
});
