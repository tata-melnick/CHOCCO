const openCompound = document.getElementById("openCompound");
const compound = document.getElementById("compound");
const slider = document.getElementById("slider");

openCompound.addEventListener("mouseover", (event) => {
  event.preventDefault();
  compound.style.width = "275px";
  compound.style.height = "345px";
  // compound.style.opacity = "1";
});

compound.addEventListener("mouseover", (event) => {
  event.preventDefault();
  compound.style.width = "275px";
  compound.style.height = "345px";
  // compound.style.opacity = "1";
});

slider.addEventListener("mouseout", (event) => {
  compound.style.width = "0";
  compound.style.height = "0";
  // compound.style.opacity = "0";
});
