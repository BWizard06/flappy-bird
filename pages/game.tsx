import Bird from "@/components/Bird";
import Background from "@/components/Background";
import Pipes from "@/components/Pipes";
import { GameProvider, useGame } from "@/contexts/GameContexts";
function GameInner() {
    const { isGameOver } = useGame();
    return (
        <>
            <Bird />
            <Background />
            <div className="w-full">
                <Pipes />
            </div>
            {isGameOver && (
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="text-5xl text-white font-bold">
                        Game Over
                    </div>
                </div>
            )}
        </>
    );
}

export default function Game() {
    return (
        <GameProvider>
            <GameInner />
        </GameProvider>
    );
}
