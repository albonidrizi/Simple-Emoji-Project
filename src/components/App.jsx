import React from "react";
import emojit from "../emojit";
import Entry from "./Entry";

function createEmoiji(emojit) {
  return (
    <Entry
      key={emojit.id}
      emoji={emojit.emoji}
      name={emojit.name}
      meaning={emojit.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Emoji Meaning</span>
      </h1>
      <dl className="dictionary">{emojit.map(createEmoiji)}</dl>
    </div>
  );
}

export default App;
