const bookBtn = document.getElementById("bookMeBtn");
const modal = document.getElementById("bookingModal");
const closeBtn = document.querySelector(".close");

bookBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

const scDock = document.getElementById("scDock");
const scToggle = document.getElementById("scToggle");

function setScState(collapsed) {
  scDock.classList.toggle("is-collapsed", collapsed);
  scToggle.setAttribute("aria-expanded", String(!collapsed));
  scToggle.setAttribute(
    "aria-label",
    collapsed ? "Expand SoundCloud player" : "Collapse SoundCloud player"
  );
}

// Default: expanded
setScState(false);

scToggle.addEventListener("click", () => {
  const collapsed = scDock.classList.contains("is-collapsed");
  setScState(!collapsed);
});
