import { useDnDContext } from "./providers/DnDProvider";
import "./App.css";

function App() {
  const { fetchDnDClasses, fetchDnDAbilityScores, fetchDnDSkills } =
    useDnDContext();

  return (
    <div className="App">
      <h1>Toast Testing</h1>
      <div className="card">
        <button onClick={() => fetchDnDClasses()}>Classes</button>
        <button onClick={() => fetchDnDAbilityScores()}>Ability Scores</button>
        <button onClick={() => fetchDnDSkills()}>Skills</button>
      </div>
    </div>
  );
}

export default App;
