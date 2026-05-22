import { useGame } from "./GameContext.jsx";

// Requirement 5: the first screen the user sees.
// Instructions plus a Play button.
export default function WelcomeScreen() {
  const { startGame } = useGame();

  return (
    <section className="welcome">
      <h1>Whack-a-Mole</h1>
      <p>Click the mole as fast as you can to score points!</p>
      <button onClick={startGame}>Play</button>
    </section>
  );
}
