import { useGame } from "./GameContext.jsx";

// One hole on the board. It gets its own number (index) as a prop.
// It shows a mole only if the mole is in this hole.
export default function Field({ index }) {
  const { molePosition, whackMole } = useGame();

  // Is the mole in this hole right now?
  const hasMole = molePosition === index;

  return (
    <div className="hole">
      {/* Requirement 7 & 8: clicking the mole runs whackMole(). */}
      {hasMole && <button className="mole" onClick={whackMole}></button>}
    </div>
  );
}
