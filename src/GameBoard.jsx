import { useGame } from "./GameContext.jsx";
import Field from "./Field.jsx";

// Requirement 6: the playing area.
// Shows the score, a Restart button, and 9 holes.
export default function GameBoard() {
  const { score, restartGame } = useGame();

  // The 9 holes, numbered 0 through 8.
  const holes = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section>
      <h2>Score: {score}</h2>

      <button onClick={restartGame}>Restart</button>

      <div className="holes">
        {holes.map((holeNumber) => (
          <Field key={holeNumber} index={holeNumber} />
        ))}
      </div>
    </section>
  );
}
