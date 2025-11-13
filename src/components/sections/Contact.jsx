import { Send } from 'lucide-react'
import emailjs from 'emailjs-com'
import { useState } from 'react'
import Swal from 'sweetalert2'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    number: "",
    message: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "You have successfully submitted",
        timer: 2000
      });
      setFormData({ name: "", email: "", subject: "", number: "", message: "" })
    }).catch(() => alert("Opps! Something went wrong"))
  }

  return (
    <section id='contact' className='bg-background-secondary'>
      <div className='container min-h-auto flex flex-col items-center justify-center py-15 px-5 md:p-20 text-center space-y-9'>
        <h2 className='text-[9vw] sm:text-[8vw] md:text-[45px] font-bold tracking-tight mb-7 text-secondary-foreground'>Get <span className='text-primary'>In Touch</span></h2>

        <div className='w-full md:p-8 flex flex-col justify-center items-center'>
          <form className='w-full md:w-[600px] flex flex-col gap-y-5' onSubmit={handleSubmit}>
            <div className='flex flex-col md:flex-row gap-y-5 md:gap-x-5 justify-around'>
              <input type='text' id='name' name='name' required value={formData.name} className='w-full px-4 py-3 rounded-md border-2 border-input border-primary focus:border-b-primary-foreground text-foreground' placeholder='Full Name' onChange={(e) => setFormData({ ...formData, name: e.target.value })} />

              <input type='email' id='email' name='email' required value={formData.email} className='w-full px-4 py-3 rounded-md border-2 border-input border-primary focus:border-b-primary-foreground' placeholder='Email Address' onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            </div>

            <div className='flex flex-col md:flex-row gap-y-5 md:gap-x-5 justify-around'>
              <input type='text' id='number' name='number' required value={formData.number} className='w-full px-4 py-3 rounded-md border-2 border-input border-primary focus:border-b-primary-foreground' placeholder='Phone Number' onChange={(e) => setFormData({ ...formData, number: e.target.value })} />

              <input type='text' id='subject' name='subject' value={formData.subject} required className='w-full px-4 py-3 rounded-md border-2 border-input border-primary focus:border-b-primary-foreground' placeholder='Subject' onChange={(e) => setFormData({ ...formData, subject: e.target.value })} />
            </div>

            <div className='flex flex-col md:flex-row gap-y-5 md:gap-x-5 justify-around'>
              <textarea type='text' id='message' name='message' required value={formData.message} className='w-full px-4 py-3 rounded-md border-2 border-input border-primary focus:border-b-primary-foreground h-[200px] resize-none' placeholder='Message' onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
            </div>

            <div className='flex flex-col md:flex-row gap-y-5 md:gap-x-5 justify-around'>
              <button type='submit' className='text-white cursor-pointer cta-button border-2 border-primary bg-primary w-full md:w-60 flex flex-row justify-center items-baseline gap-x-2 mx-auto'>Submit <Send size={16} /></button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact