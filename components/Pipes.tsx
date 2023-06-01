import Image from "next/image";

const Pipes = () => {
  return (
    <>
      <div className="static place-items-center">
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
    </>
  );
};

export default Pipes;