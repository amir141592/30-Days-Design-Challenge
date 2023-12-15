const container = document.querySelector(".container");
const icons = document.querySelectorAll(".search-bar i");

for (const icon of icons) icon.addEventListener("click", () => container.classList.toggle("change"));
