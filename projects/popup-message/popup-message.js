const btns = document.querySelectorAll(".btn");
const modals = document.querySelectorAll(".modal");

for (const btn of btns)
  btn.addEventListener("click", () => {
    for (const modal of modals)
      if (modal.id.split("-")[0] == btn.id.split("-")[0]) {
        modal.classList.add("open");

        modal.querySelector(".modal-btn").addEventListener("click", () => modal.classList.remove("open"));
      }
  });
