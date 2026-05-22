import { createContext, useContext, useState } from "react";

// Create the context. This is the shared "box" that holds the
// game data so any component can use it.
const GameContext = createContext();

// The Provider holds all the game state and the functions
// that change it. We wrap the whole app in this (see main.jsx).
export function GameProvider({ children }) {
  // Which screen to show: "welcome" or "playing".
  const [screen, setScreen] = useState("welcome");

  // The player's score.
  const [score, setScore] = useState(0);

  // Which hole number the mole is in (0 to 8).
  const [molePosition, setMolePosition] = useState(0);

  // Pick a random hole number from 0 to 8.
  function getRandomHole() {
    return Math.floor(Math.random() * 9);
  }

  // Play button: start a fresh game (Requirement 6 & 10).
  function startGame() {
    setScore(0);
    setMolePosition(getRandomHole());
    setScreen("playing");
  }

  // Restart button: go back to the welcome screen (Requirement 9).
  function restartGame() {
    setScreen("welcome");
  }

  // Mole was clicked: add a point and move it (Requirement 7 & 8).
  function whackMole() {
    setScore(score + 1);
    setMolePosition(getRandomHole());
  }

  // Everything we want to share with the rest of the app.
  const value = {
    screen,
    score,
    molePosition,
    startGame,
    restartGame,
    whackMole,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

// Custom hook so components can read the box with one short line.
export function useGame() {
  return useContext(GameContext);
}
