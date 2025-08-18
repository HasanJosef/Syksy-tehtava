import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      style={{
        marginBottom: 24,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <button
        onClick={toggleTheme}
        style={{ fontSize: "1.1rem", padding: "12px 32px" }}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </header>
  );
}

export default Header;
