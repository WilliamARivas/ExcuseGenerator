/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

const randomElement = array => {
  let arrLength = array.length;
  return array[Math.floor(Math.random() * arrLength)];
};

window.onload = function() {
  const excuse = document.getElementById("excuse");
  let newExcuse =
    randomElement(who) +
    " " +
    randomElement(action) +
    " " +
    randomElement(what) +
    " " +
    randomElement(when);
  excuse.textContent = newExcuse;
};
