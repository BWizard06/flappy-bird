import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import React from "react";

interface PipeProps {
    id?: number;
    upper_height?: number;
    lower_height?: number;
}

const Pipe: React.FC<PipeProps> = ({ id, upper_height, lower_height }) => {
    const pipe = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (pipe.current) {
                const currentLeft = parseInt(
                    pipe.current.style.left.replace("px", "") || "0"
                );
                pipe.current.style.left = `${currentLeft - 6}px`;
            }
        }, 20);
        return () => clearInterval(interval);
    }, []);

    const upperStyle = {
        height: `${upper_height}px`,
      };
    
      const lowerStyle = {
        height: `${lower_height}px`,
      };
    

    return (
        <div
            key={id}
            className="absolute inset-0 w-full left-full flex"
            ref={pipe}
        >
            <div className="absolute bottom-0 right-0" style={lowerStyle}>
                <Image
                    src="/images/sprites/pipeup.png"
                    alt="Top Pipe"
                    width={100}
                    height={200}
                />
            </div>
            <div className="absolute  right-0" style={upperStyle}>
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

type PipeType = {
    id: number;
    upper_height?: number;
    lower_height?: number;
};

const Pipes = () => {
    const [pipes, setPipes] = useState<PipeType[]>([{ id: 0 }]);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomUpperHeight = Math.floor(Math.random() * (80 - 30 + 1)) + 30;
            const randomLowerHeight = Math.floor(Math.random() * (500 - 80 + 1)) + 80;
            setPipes((prev) => [
                ...prev,
                { id: prev.length, upper_height: randomUpperHeight, lower_height: randomLowerHeight },
            ]);
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {pipes.map((pipe: PipeType) => (
                <Pipe
                    key={pipe.id}
                    {...pipe}   
                />
            ))}
        </>
    );
};
export default Pipes;
