import { useDnDContext } from "./providers/DnDProvider";
import "./App.css";

function App() {
  const { fetchDnDSpells } = useDnDContext();

  return (
    <div className="App">
      <h1>Toast Testing</h1>
      <div className="card">
        <button onClick={() => fetchDnDSpells()}>Spells</button>
      </div>
    </div>
  );
}

export default App;
