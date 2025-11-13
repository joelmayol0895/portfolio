import { Facebook, Twitter, Linkedin, Instagram, Github, Mail } from "lucide-react"
import Typewriter from 'typewriter-effect'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {


  useGSAP(() => {
    gsap.to('.social-icons', {
      y: 10, ease: "bounce.out",
      stagger: {
        each: 0.5,
        repeat: -1,
        yoyo: true,
      }
    });
  }, {});

  return (
    <section id='home' className='relative min-h-screen flex flex-col items-center justify-center py-10 px-2 sm:px-4 w-full'>
      <div className='container text-center'>
        <div className='tracking-tight mb-5 font-semibold'>
          <h1 className='space-y-3 flex flex-col tracking-wide mb-10'>
            <span className="text-[25px]">Welcome</span>
            <span className="flex justify-center items-center lg:flex-col flex-col">
              <span className='font-bold text-[9.5vw] sm:text-[7vw] md:text-[65px] text-secondary-foreground'>I'm <span className="font-bold text-[9.5vw] sm:text-[7vw] md:text-[65px] text-primary inline-block">Joel Mayol Jr.</span></span>
              <span className='font-semibold text-[6.5vw] sm:text-[5vw] md:text-[45px] text-primary'>Frontend Developer!</span>
            </span>
          </h1>
          <h2>
            <span className="flex items-center gap-x-3 min-w-full md:min-w-xl justify-center mx-auto flex-col md:flex-row font-semibold text-[6.5vw] sm:text-3xl md:text-4xl">I'm expert in:
              <span className='text-[6.5vw] font-bold min-h-[77px] sm:min-h-auto sm:text-3xl md:text-4xl inline-block md:inline-block text-primary-foreground'>
                <Typewriter
                  options={{
                    strings: ['WordPress Development', 'Theme Customization', 'Responsive Design', 'Website Development', 'Website Maintenance', 'Performance Optimization'],
                    autoStart: true,
                    loop: true,
                    cursor: '_'
                  }}
                />
              </span>
            </span>
          </h2>
        </div>

        <div className='flex flex-col md:flex-row gap-x-1 items-center justify-center'>
          <a href="#about" className='cta-button border-2 border-primary bg-primary w-full md:w-60 text-white'>About Me</a>
          <a href="#contact" className='cta-button border-2 border-primary w-full md:w-60'>Let's Talk</a>
        </div>

        <div className='grid grid-cols-3 sm:grid-cols-6 mt-10 gap-3 gap-y-7 max-w-md mx-auto place-items-center justify-items-center'>
          <a href="https://www.facebook.com/joel.mayol.9" className='social-icons'>
            <Facebook />
          </a>
          <a href="https://twitter.com/joelmayol0895" className='social-icons'>
            <Twitter />
          </a>
          <a href="https://www.linkedin.com/in/joel-mayol-35674b21b/" className='social-icons'>
            <Linkedin />
          </a>
          <a href="https://www.instagram.com/joelmayol_jr/" className='social-icons'>
            <Instagram />
          </a>
          <a href="https://github.com/joelmayol0895" className='social-icons'>
            <Github />
          </a>
          <a href="mailto:joelmayol0895@gmail.com" className='social-icons'>
            <Mail />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero