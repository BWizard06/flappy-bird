import React from "react";
import Image from "next/image";
import Pipes from "./Pipes";

export default function Background() {
  return (
    <>
      <div className="overflow-hidden relative w-full h-full bg-cover bg-center -z-10">
        <Image
          src="/images/background.png"
          width={1920}
          height={1080}
          alt="Background"
        />
      </div>

      {/* <Pipes /> */}
    </>
  );
}
