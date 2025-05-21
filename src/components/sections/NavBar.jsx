import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import ThemeToggle from "@/components/ThemeToggle"
import NavList from "@/components/data/NavList"
import Logo from "@/assets/images/logo.webp"
import { Link as ScrollLink } from "react-scroll"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(ScrollTrigger)

const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = 150;
      setIsSticky(window.scrollY > triggerPoint);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  useGSAP(() => {
    const menu_items = document.querySelector('.menu-items');

    gsap.from('.logo', {
      opacity: 0, delay: 2, x: 20
    });

    if (menu_items) {
      gsap.from(menu_items.children, {
        opacity: 0, delay: 3, x: 0,
        stagger: {
          amount: 1
        }
      });
    }
  }, []);

  return (
    <nav className={`h-auto py-3 w-full border-b-1 border-gray-600 border-solid transition-all duration-500 z-50 
      ${isSticky && "bg-transparent/80 backdrop-blur-sm shadow-xs h-auto md:fixed"}
      ${isMenuOpen && "h-full fixed md:h-auto"}
      `}>
        <div className="container mx-auto flex flex-row justify-between items-center h-full">
          <a href="#home" className={`${isMenuOpen ? "invisible md:visible" : "visible"} logo`}>
            <img src={Logo} alt="logo" className="w-25 h-25 object-contain"/>
          </a>

          <div className="flex md:flex-row align-center flex-row-reverse">

            {/*Desktop Menu*/}
            <div className='hidden md:flex flex-row gap-8 items-center menu-items'>
              {NavList.map((item, key) => 
                <ScrollLink 
                  key={key} 
                  to={item.url} 
                  spy
                  smooth
                  duration={500}
                  offset={-150}
                  isDynamic={true}
                  className="text-foreground hover:text-primary transition-colors cursor-pointer ">{item.label}
                </ScrollLink>
              )}
            </div>

            {/*Mobile Menu*/}
            <button onClick={() => setIsMenuOpen((prev) => !prev)} className={`z-50 text-foreground md:hidden ${isMenuOpen && "absolute top-[51px] right-auto"}`}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className={`fixed h-full inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden text-xl gap-y-3
              ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
              {NavList.map((item, key) => 
                <ScrollLink 
                  key={key}
                  to={item.url}  
                  spy
                  smooth
                  duration={500}
                  className="text-foreground/80 hover:text-primary transition-colors cursor-pointer" onClick={() => setIsMenuOpen(false) }>{item.label}
                </ScrollLink>
              )}
            </div>

            <span className={`flex flex-row gap-8 items-center mx-5 ${isMenuOpen ? "opacity-0 md:opacity-100" : "opacity-100"}`}>|</span>
            
            <ThemeToggle isMenuOpen={isMenuOpen}/>
          </div>

        </div>
    </nav>
  )
}

export default NavBar