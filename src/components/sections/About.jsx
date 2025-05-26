import Profile from "@/assets/images/profile.webp"
import { ArrowDownToLine} from "lucide-react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from "@gsap/react"
import Resume from '@/assets/images/Resume.pdf'
gsap.registerPlugin(ScrollTrigger)

const About = () => {
  
  useGSAP(() => {
    gsap.from(".parag1", 
      {
      scale: .5, 
      duration: 2, 
      scrollTrigger: {
        trigger: ".parag1",
        // start: "top center",
        // toggleActions: "restart pause reverse pause",
      }});

    gsap.from(".parag2", 
      {
      scale: .5, 
      duration: 2, 
      delay: .5,
      scrollTrigger: {
        trigger: ".parag2",
        // start: "top center",
        // toggleActions: "restart pause reverse pause",
      }});
  }, {});

  return (
    <section id='about' className='bg-background-secondary'>
      <div className='container min-h-screen flex flex-col items-center justify-center p-5 md:p-20 text-center space-y-9'>
        <h2 className='text-2xl md:text-4xl font-bold tracking-tight mb-7'>About <span className='text-primary'>Me</span></h2>

        <div className="relative w-[280px] h-[290px] profile-img">
          <span className="w-full h-full rounded-full border-6 border-y-background-secondary border-primary absolute inset-0"></span>
          <div className="p-3">
            <img src={Profile} alt="Joel Mayol Jr" className="rounded-full border-6 border-primary"/>
          </div>
        </div>

        <h3 className='text-2xl md:text-3xl font-bold mb-7'><span className='text-primary-foreground'>Frontend</span> Developer!</h3>

        <p className="text-[14px] sm:text-[16px] parag1">I have accumulated over 8 years of experience as a Front-End Developer, and I am deeply passionate about my work in this field. Continuously learning and embracing new challenges excite me, particularly within the realm of Front-End Development. I thrive on ambitious projects, relishing the opportunity to solve problems with a keen attention to detail. My enthusiasm for web development is driven by a genuine love for the craft.</p>

        <p className="text-[14px] sm:text-[16px] parag2">As a front-end developer, my primary responsibilities involve creating visually appealing and seamless user interfaces for websites and applications. I work with languages like HTML, CSS, and JavaScript to design and implement responsive, cross-browser compatible, and high-performance web solutions. Collaboration with designers and back-end developers is essential, and my role extends to ensuring a positive user experience through usability and accessibility considerations. Staying current with evolving technologies and trends, along with problem-sol ving skills and a commitment to continuous learning, are key attributes for success in this dynamic field.</p>

        <a href={Resume} target="_blank" className='cta-button border-2 border-primary flex flex-row gap-x-2 items-center'>Download CV <ArrowDownToLine /></a>
      </div>
      
    </section>
  )
}

export default About