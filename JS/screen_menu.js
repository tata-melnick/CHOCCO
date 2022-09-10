const openScreenMenu = document.getElementById("hamburger");
const screenMenu = document.getElementById("screenMenu");
const close = document.getElementById("close");

openScreenMenu.addEventListener("click", (event) => {
  event.preventDefault();
  screenMenu.style.opacity = "1";
  screenMenu.style.top = "0";
});

close.addEventListener("click", (event) => {
  event.preventDefault();
  screenMenu.style.opacity = "0";
  screenMenu.style.top = "-1000px";
});
