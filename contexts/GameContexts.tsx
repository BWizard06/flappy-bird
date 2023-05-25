import { createContext, useState, useContext, } from "react";
import React from "react";

type GameContextType = {
  isGameOver: boolean;
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC = ({ children }) => {
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  return (
    <GameContext.Provider value={{ isGameOver, setIsGameOver }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};
