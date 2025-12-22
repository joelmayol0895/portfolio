import { SquareCheckBig, ArrowBigRightDash } from "lucide-react"
import WorkExperience from "@/components/data/WorkExperience";
import { useState, useRef } from "react"

const Experience = () => {

    const [isExpand, setIsExpand] = useState(null);
    const itemRefs = useRef([]);

    const toggleExpand = (id) => {
        const newId = isExpand === id ? null : id;
        setIsExpand(newId);

        if (newId !== null) {
            // allow the CSS expand transition to start, then scroll the expanded item into view
            setTimeout(() => {
                const el = itemRefs.current[newId];
                if (!el) return;
                const headerOffset = 80; // adjust if you have a fixed header
                const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
                if (typeof el.focus === 'function') el.focus();
            }, 220);
        }
    }

    return (
        <section id="experience">
            <div className='container min-h-auto flex flex-col py-15 md:py-20 px-5 sm:px-10 text-center space-y-9'>
                <h2 className='text-[9vw] sm:text-[8vw] md:text-[45px] font-bold tracking-tight mb-7 text-secondary-foreground'>My <span className='text-primary'>Journey</span></h2>
                <div>
                    <h3 className='text-[6.5vw] sm:text-[4.5vw] md:text-3xl font-bold mb-15'><span className='text-primary-foreground'>Work</span> Experience</h3>
                    {WorkExperience.map((exp, key) => (
                        <div ref={el => itemRefs.current[key] = el} tabIndex={-1} className={`flex flex-row justify-around items-start ${isExpand === key ? "h-full" : "overflow-hidden"}`} key={key}>
                            <div className='w-[30%] lg:flex flex-row py-5 pr-8 text-right justify-end hidden'>
                                <h4 className="text-foreground/80 text-md md:text-2xl font-normal bg-linear-to-r from-background/80 to-background-secondary rounded-md p-4 w-xl cursor-pointer" onClick={() => toggleExpand(key)}>{exp.year}</h4>
                            </div>
                            <div className={`w-full lg:w-[70%] border-l-2 border-primary-foreground py-3 md:py-5 pl-5 sm:pl-8 text-left relative`}>
                                <div className="flex flex-row items-center p-4 bg-linear-to-l from-background/80 to-background-secondary rounded-md">
                                    <span className={`${isExpand === key ? "opacity-100" : "opacity-0"} transition-all duration-500 w-5 h-5 rounded-full bg-primary-foreground border absolute left-[-11px] top-auto shadow-primary-foreground shadow-[0_0_10px_rgba(0,171,240,0,5)]`}></span>
                                    <h4 className='text-[20px] sm:text-xl md:text-2xl font-semibold cursor-pointer text-foreground/80' onClick={() => toggleExpand(key)}>
                                        {exp.company}
                                        <span className="text-[16px] sm:text-md md:text-xl text-primary-foreground block lg:hidden"> [ {exp.year} ]</span>
                                    </h4>
                                </div>

                                {exp.respon.map((role, i) => (
                                    <div key={i} className={`absolute bottom-0 transition-all duration-500 ease-in px-2 rounded-lg mt-3 
                                    ${isExpand === key ? "h-auto opacity-100 relative translate-y-0" : "h-0 opacity-0"}`}>
                                        <h5 className='text-[16px] sm:text-xl font-semibold mb-3'>
                                            {role.position} - <span className="text-primary inline-block text-[16px] sm:text-[16px]">[ {role.year} ]</span>
                                        </h5>
                                        <ul className="space-y-2 bg-foreground/20 p-4 rounded-lg">
                                            {role.list.map((item, idx) => (
                                                <li key={idx} className="flex gap-x-2 items-start">
                                                    <SquareCheckBig size={19} className="text-primary mt-1" />
                                                    <p className="text-[16px] sm:text-[16px]">{item}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience