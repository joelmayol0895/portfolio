import SkillsData from "../data/SkillsData"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(ScrollTrigger)

const Skills = () => {

  // useGSAP(() => {
  //   gsap.to('.skill-set',
  //     {
  //       y: 10,
  //       ease: "none",
  //       duration: 3,
  //       stagger: {
  //         each: 0.5,
  //         repeat: -1,   
  //         yoyoEase: true,
  //       }
  //   });
  // }, {});

  return (
    <section id="skills" className='bg-background-secondary'>
      <div className='container min-h-auto flex flex-col items-center justify-center py-15 md:p-20 text-center space-y-9'>
        <h2 className='text-[9vw] sm:text-[8vw] md:text-[45px] font-bold tracking-tight mb-7 text-secondary-foreground'>My <span className='text-primary'>Skills</span></h2>
        <div className='w-full'>
          <h3 className='text-[6.5vw] sm:text-[4.5vw] md:text-3xl font-semibold mb-5'><span className='text-primary-foreground'>Essential Tools</span> that I'm using</h3>
          <p className="text-[16px]">Discover the powerful tools and technologies I use to create exceptional, high-performing websites & application</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-around text-left w-full gap-x-4 gap-y-7 isolate'>
          {SkillsData.map((skills, key) => (
            <div className='skill-set relative flex flex-row px-3 rounded-xl items-center h-20 bg-background overflow-hidden' key={key}>
              <div className="relative z-10 flex flex-row">
                <img src={skills.icon} alt="Figma" className='size-11 mr-2 bg-foreground/20 rounded-md p-2' />
                <div className='flex flex-col'>
                  <h3>{skills.label}</h3>
                  <p className='text-foreground/70 leading-none'>{skills.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills