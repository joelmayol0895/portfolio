import { useEffect, useState } from "react"

const LoadingScreen = ({onComplete}) => {
    const [text, setText] = useState("");
    const fullText = "Please wait...";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if(index > fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 100)
        return () => clearInterval(interval);
    },[])

  return (
    <div className='fixed inset-0 flex flex-col items-center justify-center z-50 bg-(--background-secondary)'>
        <div className='mb-4 text-2xl md:text-4xl font-bold tracking-widest'>
            {text} <span className='animate-blink ml-1'>|</span>
        </div>

        <div className='w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden'>
            <div className='w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar'>{" "}</div>
        </div>
    </div>
  )
}

export default LoadingScreen