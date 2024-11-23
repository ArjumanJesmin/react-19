/* eslint-disable react/prop-types */

import { createContext, useState, use } from "react";

const ThemeContext = createContext();

// eslint-disable-next-line no-unused-vars
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function ThemeCard() {
  // change useContext and only use
  const { theme, toggleTheme } = use(ThemeContext);
  return (
    <div className="flex flex-col gap-6">
      <div
        className={
          theme === "light"
            ? "rounded bg-gray-50 p-8 text-purple-950 border border-purple-100"
            : "rounded bg-purple-950 p-8 text-neutral-300 border border-purple-800"
        }
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        dolores illo, reprehenderit voluptate recusandae perspiciatis quam,
        pariatur commodi possimus officiis quas vitae voluptatum. Magni aliquam
        eligendi itaque possimus sit dolorem.
      </div>
      <div>
        <button
          onClick={toggleTheme}
          className="rounded p-3 bg-green-600 text-white"
        >
          Change Theme
        </button>
      </div>
    </div>
  );
}

export default function Theme() {
  return (
    <ThemeProvider>
      <ThemeCard />
    </ThemeProvider>
  );
}
