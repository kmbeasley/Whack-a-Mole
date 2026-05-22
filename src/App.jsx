import { useGame } from "./GameContext.jsx";
import WelcomeScreen from "./Welcome.jsx";
import GameBoard from "./GameBoard.jsx";

// App decides WHICH screen to show based on the "screen" value
// in the game context. This is requirement 5 & 6 in action.
export default function App() {
  const { screen } = useGame();

  return (
    <main>{screen === "welcome" ? <WelcomeScreen /> : <GameBoard />}</main>
  );
}
