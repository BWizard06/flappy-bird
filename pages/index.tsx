import {useRouter }from "next/router";
import useCurrentUser from "@/hooks/useCurrentUser";

export default function Home(){

  const { data: user} = useCurrentUser();
  const router = useRouter();
  
  return (
    <>
      <div className="relative h-full w-full bg-[url('/images/bg-pic.jpg')] bg-no-repeat bg-center bg-fixed bg-cover flex justify-center items-center">
        <div className="bg-black w-full h-full lg:bg-opacity-60">
          <div className="flex flex-col items-center">
            <button onClick={() => router.push('/game')} className="bg-white text-black font-bold py-2 px-4 rounded-full mb-4 flex-grow-0 w-24 h-8">Spielen</button>
            <button onClick={() => router.push('/auth')} className="bg-white text-black font-bold py-2 px-4 rounded-full flex-grow-0">Einloggen</button>
          </div>
        </div>
      </div>
    </>
  )
}