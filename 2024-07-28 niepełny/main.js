import { showHeadingButton, incomesForms } from "./elements.js";
//import wszystkeigo do obiektu elements
//import * as elements from './js/elements'
import getTotalPrice from "./helpers.js";

const button = document.getElementById("show-heading");

const showHeading = () => {
  const heading = document.createElement("h1");
  heading.textContent = "Hello";
  heading.id = "123";
  //inna forma przypisania atrybutu id
  //heading.setAttribute("id", "123");
  heading.style.color = "red";
  heading.classList.add("heading");

  document.body.appendChild(heading);
};

button.addEventListener("click", showHeading); //wywołanie funkcji showHeading
