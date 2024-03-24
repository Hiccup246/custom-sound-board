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
      <label class="flex items-center cursor-pointer relative toggle-wrapper">
        <input
          type="checkbox"
          class="sr-only"
          onClick={(event) => event.stopImmediatePropagation()}
        />

        <span class="block dark:bg-white bg-white w-14 h-5 rounded-full"></span>
        <span class="dot absolute left-1 bg-black w-6 h-3 rounded-full transition">
        </span>
        <span class="ml-3 dark:text-white text-black align-middle text-start">
          {theme}
        </span>
      </label>
    </div>
  );
}
