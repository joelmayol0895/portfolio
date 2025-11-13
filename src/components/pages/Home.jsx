import LoadingScreen from '../LoadingScreen';
import NavBar from '../sections/NavBar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import CopyrightFooter from '../sections/CopyrightFooter';
import { animateScroll } from 'react-scroll';
import { ArrowUpFromLine } from 'lucide-react';
import { useState, useEffect } from 'react';
import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP } from "@gsap/react"
import Footer from '../sections/Footer';

const Home = ({ isLoaded, setIsLoaded }) => {

  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = 1500;
      setIsScroll(window.scrollY > triggerPoint);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };

  const boxBouncing = useRef();
  const fromTheTop = useRef();

  useGSAP(() => {
    gsap.to(boxBouncing.current, {
      y: -30,
      duration: 1,
      ease: "bounce.out",
      repeat: -1,
      yoyo: true
    });

  }, {});

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen bg-background text-foreground overflow-x-hidden transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <header className='h-[125px]'>
          <NavBar />
        </header>
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <footer>
          <Footer />
          <CopyrightFooter />
          <button ref={boxBouncing} onClick={scrollToTop} className={`${isScroll ? "opacity-100" : "opacity-0"} transition-all fixed right-4 bottom-4 cursor-pointer bg-primary-foreground/70 p-3 flex justify-center items-center rounded-sm`}>
            <ArrowUpFromLine size={20} />
          </button>
        </footer>
      </div>
    </>
  )
}

export default Home