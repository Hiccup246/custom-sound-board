import { useEffect, useState } from "preact/hooks";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("");

  function toggleTheme() {
    if (localStorage.theme === "dark") {
      setTheme("Dark");
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("Light");
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    }
  }

  function setInitialToggleText() {
    if (localStorage.theme === "dark") {
      setTheme("Light");
    } else {
      setTheme("Dark");
    }
  }

  useEffect(() => {
    setInitialToggleText();
  }, []);

  return (
    <div onClick={toggleTheme}>
      <label class="flex items-center cursor-pointer">
        <div class="relative">
          <input
            type="checkbox"
            class="sr-only"
            onClick={(event) => event.stopImmediatePropagation()}
          />
          <div class="block dark:bg-white bg-white w-14 h-5 rounded-full"></div>
          <div class="dot absolute left-1 top-1 bg-black w-6 h-3 rounded-full transition">
          </div>
        </div>

        <p class="ml-3 dark:text-white text-black">
          {theme}
        </p>
      </label>
    </div>
  );
}
