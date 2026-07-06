const year = document.querySelector("[data-year]");
if (year) {
  year.textContent = new Date().getFullYear();
}

const header = document.querySelector("[data-header]");
const updateHeader = () => {
  if (!header) return;
  header.style.borderBottom = window.scrollY > 8 ? "1px solid rgba(32, 35, 38, 0.1)" : "1px solid transparent";
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
