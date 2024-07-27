const message = document.querySelector("#message");
const counter = document.querySelector("#counter");

message.addEventListener("input", (event) => {
  const length = event.target.value.length;
  counter.textContent = length;

  //   if (length > 50) {
  //     counter.style.color = "red";
  //   } else {
  //     counter.style.color = "black";
  //   }

  //ternaty operator - też inny if
  counter.style.color = length > 50 ? "red" : "black";
});

const button = document.getElementById("addElement");

button.addEventListener("click", () => {
  const heading = document.createElement("h2");
  heading.textContent = "Hello";
  heading.style.color = "green";
  heading.style.fontSize = "30px";

  //bez poniższego nic się nie zmieni na stronie, musimy go dodać do DOM
  document.body.appendChild(heading);
});
