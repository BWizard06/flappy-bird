import Image from "next/image";

const Pipes = () => {
  return (
    <>
      <div className="absolute z-10">
        <div className="absolute w-50 h-24">
          <Image
            src="/images/sprites/pipeup.png"
            alt="Top Pipe"
            width={50}
            height={100}
          />
        </div>
        <div className="absolute w-50 h-24">
          <Image
            src="/images/sprites/pipedown.png"
            alt="Bottom Pipe"
            width={50}
            height={100}
          />
        </div>
      </div>
    </>
  );
};

export default Pipes;