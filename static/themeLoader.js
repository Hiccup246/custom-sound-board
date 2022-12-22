const themeSet = "theme" in localStorage;

if (themeSet) {
  if (localStorage.theme == "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
} else {
  const systemHasDarkThemePreference =
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (systemHasDarkThemePreference) {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
  } else {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
  }
}
