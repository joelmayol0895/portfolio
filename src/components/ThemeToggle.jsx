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
    <button onClick={toggleTheme} className={`float-right cursor-pointer flex flex-row justify-center items-center bg-background-secondary px-2 py-1 gap-1 rounded-full shadow-primary shadow-[0_0_10px_rgba(0,171,240,0,5)] ${isMenuOpen ? "opacity-0 md:opacity-100" : "opacity-100"}`}>
        <div className={`rounded-full p-[2px] ${isDarkMode ? "bg-none" : "bg-gray-500"}`} >
            <Moon className={`h-4 w-4 text-primary ${isDarkMode ? "opacity-100" : "opacity-0"}`}/>
        </div>  
        <div className={`rounded-full p-[2px] ${!isDarkMode ? "bg-none" : "bg-gray-500"}`}>
            <Sun className={`h-4 w-4 text-yellow-300 ${!isDarkMode ? "opacity-100" : "opacity-0"}`}/>
        </div>
    </button>
  )
}

export default ThemeToggle