
import { Copyright } from "lucide-react"

const CopyrightFooter = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-x-2 text-foreground p-5">
      <span className="flex flex-row items-center gap-x-2">Copyright <Copyright size={18}/> {year}</span> <small className="hidden md:inline-block text-[16px]">/</small> <span>Created by Joel M. Mayol Jr.</span> 
    </section>
  )
}

export default CopyrightFooter