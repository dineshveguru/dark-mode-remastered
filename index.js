document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector("#test");
  const heading = document.querySelector("h1");
  heading.innerHTML = "light mode";
  const block = document.querySelector(".container");
  block.style.backgroundColor = "#f0f8ff";
  const bg = document.querySelector("body");
  toggle.onclick = () => {
    if (heading.innerHTML === "light mode") {
      heading.innerHTML = "dark mode";
      heading.style.color = "#fff";
      toggle.src = "lamp.png";
      bg.style.backgroundColor = "#141414";
      block.style.backgroundColor = "#363636";
    } else {
      heading.innerHTML = "light mode";
      block.style.backgroundColor = "#f0f8ff";
      bg.style.backgroundColor = "#fff";
      heading.style.color = "#000";
      toggle.src = "moon.png";
    }
  };
});
