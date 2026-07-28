const themeToggleButton = document.getElementById("themeToggle");
const lightIcon = document.querySelector(".theme-light-toggle-icon");
const darkIcon = document.querySelector(".theme-dark-toggle-icon");
const giscusIFrame = document.querySelector(".giscus-frame") as HTMLIFrameElement | null;

const rootElement = document.documentElement;

function sendGiscusThemeUpdate(theme: "light" | "catppuccin_mocha") {
  if (giscusIFrame) {
    giscusIFrame.contentWindow?.postMessage(
      { giscus: { setConfig: { theme } } },
      "https://giscus.app"
    );
  }
}

function toggleTheme() {
  if (rootElement.classList.contains("dark")) {
    rootElement.classList.remove("dark");
    // If giscus is present, send a message to update its theme
    sendGiscusThemeUpdate("light");
    localStorage.setItem("theme", "light");
  } else {
    rootElement.classList.add("dark");
    // If giscus is present, send a message to update its theme
    sendGiscusThemeUpdate("catppuccin_mocha");
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
