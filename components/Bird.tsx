import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Bird() {
    const [open, setOpen] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
    const bird = useRef<HTMLImageElement | null>(null);

    setTimeout(() => {
        setOpen(!open);
    }, 400);


    useEffect(() => { 
        const detectKeyDown = (e: KeyboardEvent) => {
            if (e.key === " "){
                if(bird.current){
                    const currentTop = parseInt(
                        bird.current.style.top.replace("px", "") || "0"
                    );
                    bird.current.style.top = `${currentTop - 70}px`;
                }
            }
        }

        document.addEventListener("keydown", detectKeyDown, true);

        return () => {
            document.removeEventListener("keydown", detectKeyDown, true);
        }
            
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            if (bird.current) {
                const currentTop = parseInt(
                    bird.current.style.top.replace("px", "") || "0"
                );
                bird.current.style.top = `${currentTop + 1}px`;
            }
        }, 10);
        return () => clearInterval(interval);
    }, []);
    


    return (
        <>
            <div className="absolute inset-0 flex justify-center items-center ">
                {open ? (
                    <Image
                        ref={bird}
                        src="/images/sprites/birsprite1.png"
                        width={120}
                        height={120}
                        alt="bird"
                        className="relative transition-all ease-out duration-200"
                    />
                ) : (
                    <Image
                        ref={bird}
                        src="/images/sprites/birdsprite2.png"
                        width={120}
                        height={120}
                        alt="bird"
                        className="relative transition-all ease-out duration-200"
                    />
                )}
            </div>
        </>
    );
}
