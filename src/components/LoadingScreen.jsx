import { useEffect, useState } from "react"

const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const [progress, setProgress] = useState(0);
    const fullText = "Loading...";

    useEffect(() => {
        const typingInterval = 80; // ms per char
        const finalDelay = 800; // ms after typing completes before onComplete
        const totalDuration = fullText.length * typingInterval + finalDelay;

        // Typing effect
        let idx = 0;
        const typeTimer = setInterval(() => {
            idx++;
            setText(fullText.substring(0, idx));
            if (idx > fullText.length) {
                clearInterval(typeTimer);
            }
        }, typingInterval);

        // Progress updater (smooth)
        const tick = 20; // ms
        const steps = Math.max(1, Math.round(totalDuration / tick));
        let step = 0;
        const progressTimer = setInterval(() => {
            step++;
            setProgress(Math.min(500, Math.round((step / steps) * 500)));
            if (step >= steps) {
                clearInterval(progressTimer);
                setTimeout(() => {
                    setProgress(500);
                    onComplete && onComplete();
                }, 40);
            }
        }, tick);

        return () => {
            clearInterval(typeTimer);
            clearInterval(progressTimer);
        };
    }, []);

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-background/95 backdrop-blur-sm">
            {/* Top slim progress bar */}
            <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
                <div
                    className="h-full bg-primary shadow-[0_0_12px_rgba(59,130,246,0.6)] transition-all duration-150"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Centered spinner + typing text */}
            <div className="flex flex-col items-center gap-6">
                <div className="w-16 h-16 rounded-full border-4 border-gray-200 border-t-primary animate-spin shadow-lg" />

                <div className="mb-2 text-lg md:text-2xl font-semibold tracking-wide text-foreground">
                    {text}
                    <span className="animate-blink ml-1">|</span>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;