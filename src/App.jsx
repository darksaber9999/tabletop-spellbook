import React from "react";
import "@shoelace-style/shoelace/dist/themes/light.css";
import "@shoelace-style/shoelace/dist/themes/dark.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";
import { useDnDContext } from "./providers/DnDProvider";
import {
  SlButton,
  SlButtonGroup,
  SlCard,
  SlCarousel,
  SlCarouselItem,
} from "@shoelace-style/shoelace/dist/react";
import "./App.css";

setBasePath(
  "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.4.0/dist/"
);

function App() {
  const { fetchDnDSpells, spellsData } = useDnDContext();

  return (
    <div className="App">
      <h1>Character Spell-list</h1>
      <SlButtonGroup label="Group">
        <SlButton size="large" variant="primary" pill>
          Available
        </SlButton>
        <SlButton
          size="large"
          variant="primary"
          pill
          onClick={() => fetchDnDSpells()}>
          Reload Spells
        </SlButton>
        <SlButton size="large" variant="primary" outline pill>
          Favorites
        </SlButton>
      </SlButtonGroup>

      {spellsData && (
        <SlCarousel
          className="vertical"
          slidesPerPage={7}
          orientation="vertical">
          {spellsData?.results.map((element) => (
            <SlCarouselItem key={element.index}>
              <SlCard className="card-basic">{element.name}</SlCard>
            </SlCarouselItem>
          ))}
        </SlCarousel>
      )}
    </div>
  );
}

export default App;
