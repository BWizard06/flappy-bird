import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Bird() {
    const [open, setOpen] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
    const bird = useRef(null);

    setTimeout(() => {
        setOpen(!open);
    }, 200);

    function handleImageLoad() {
        setIsLoaded(true);
    }

    function jump() {
        useEffect(() => {
            document.addEventListener("keydown", detectKeyDown, true);
        }, []);

        const detectKeyDown = (e: any) => {
            console.log(e.key);
            bird.current.style.top = "10px";
            if (e.key === " ") {
                bird.current.style.top += "10px";
            }
        };
    }

    jump();

    return (
        <>
            <div className="flex justify-center h-full items-center">
                {open ? (
                    <Image
                        ref={bird}
                        src="/images/sprites/birsprite1.png"
                        width={120}
                        height={120}
                        alt="bird"
                        onLoad={handleImageLoad}
                    />
                ) : (
                    <Image
                        ref={bird}
                        src="/images/sprites/birdsprite2.png"
                        width={120}
                        height={120}
                        alt="bird"
                        onLoad={handleImageLoad}
                    />
                )}
            </div>
        </>
    );
}
