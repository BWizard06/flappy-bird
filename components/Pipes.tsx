import Image from "next/image";
import { useEffect, useRef } from "react";

const Pipes = () => {
    const pipe = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (pipe.current) {
                const currentLeft = parseInt(
                    pipe.current.style.left.replace("px", "") || "0"
                );
                pipe.current.style.left = `${currentLeft - 5}px`;
            }
        }, 20);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="absolute inset-0 w-full left-full flex justify-center"
            ref={pipe}
        >
            <div className="absolute bottom-0">
                <Image
                    src="/images/sprites/pipeup.png"
                    alt="Top Pipe"
                    width={100}
                    height={200}
                />
            </div>
            <div className="absolute top-0">
                <Image
                    src="/images/sprites/pipedown.png"
                    alt="Bottom Pipe"
                    width={100}
                    height={200}
                />
            </div>
        </div>
    );
};

export default Pipes;
