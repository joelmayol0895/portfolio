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
  const [lastScrollY, setLastScrollY] = useState(5);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = 5;
      const currentScrollY = window.scrollY;
      const scrollThreshold = window.innerHeight * 0.8; // 40% of viewport height

      setIsSticky(currentScrollY > triggerPoint);

      // Hide when scrolling down past threshold, show when scrolling up
      if (currentScrollY > scrollThreshold && currentScrollY > lastScrollY) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY])

  useGSAP(() => {
    const menu_items = document.querySelector('.menu-items');

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
    <nav className={`h-auto py-3 w-full border-b border-gray-600 border-solid transition-all duration-500 z-50 md:fixed md:left-1/2 md:transform md:-translate-x-1/2 md:top-0
      ${!isSticky && "md:w-full"}
      ${isSticky && `bg-background/95 backdrop-blur-md shadow-md border rounded-[50px] py-2 md:w-[90%] lg:w-[70%] md:top-4 md:transition-[top,width,opacity] md:duration-500 ${isVisible ? "md:opacity-100 md:pointer-events-auto" : "md:opacity-0 md:pointer-events-none"}`}
      ${isMenuOpen && "h-full fixed md:h-auto"}`}>
      <div className={`flex flex-row justify-between items-center h-full ${isSticky ? "px-6 md:px-5" : "container mx-auto"}`}>
        <a href="#home" className={`logo transition-all duration-500 ${isMenuOpen ? "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto" : "opacity-100 pointer-events-auto"}`}>
          <img src={Logo} alt="logo" className={`object-contain transition-all duration-500 drop-shadow-lg ${isSticky ? "w-13 h-13" : "w-25 h-25"}`} />
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
                className="text-foreground hover:text-primary transition-colors cursor-pointer">{item.label}
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
                className="text-foreground/80 hover:text-primary transition-colors cursor-pointer" onClick={() => setIsMenuOpen(false)}>{item.label}
              </ScrollLink>
            )}
          </div>

          <span className={`flex flex-row gap-8 items-center mx-5 ${isMenuOpen ? "opacity-0 md:opacity-100" : "opacity-100"}`}>|</span>

          <ThemeToggle isMenuOpen={isMenuOpen} />
        </div>

      </div>
    </nav>
  )
}

export default NavBar