import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = ({isMenuOpen}) => {

    const [isDarkMode, setIsDarkmode] = useState(false)

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "light") {
            document.documentElement.classList.add("light")
            setIsDarkmode(true);
        } else {
            localStorage.getItem("theme", "dark")
            setIsDarkmode(false);
        }
    })
    
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("light");
            localStorage.setItem("theme", "dark");
            setIsDarkmode(false);
        } else {
            document.documentElement.classList.add("light");
            localStorage.setItem("theme", "light");
            setIsDarkmode(true);
        }
    }

  return (
    <button onClick={toggleTheme} className={`float-right cursor-pointer ${isMenuOpen ? "opacity-0 md:opacity-100" : "opacity-100"}`}>
        {isDarkMode ? <Moon className="h-6 w-6 text-foreground"/> : <Sun className="h-6 w-6 text-yellow-300"/> }
    </button>
  )
}

export default ThemeToggle