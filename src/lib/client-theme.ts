const themeToggleButton = document.getElementById("themeToggle");
const lightIcon = document.querySelector(".theme-light-toggle-icon");
const darkIcon = document.querySelector(".theme-dark-toggle-icon");

const rootElement = document.documentElement;

function toggleTheme() {
  if (rootElement.classList.contains("dark")) {
    rootElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    rootElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}

themeToggleButton?.addEventListener("click", toggleTheme);

// Set the initial theme based on user preference or system settings
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  rootElement.classList.toggle("dark", savedTheme === "dark");
} else {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  rootElement.classList.toggle("dark", prefersDark);
}
