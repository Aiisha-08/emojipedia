import React from "react";
import Entry from "./Entry";
import Heading from "./Heading";
import emojipedia from "../emojipedia";

function emojiInfo(emoji) {
  return (
    <Entry
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <Heading />
      <dl className="dictionary">{emojipedia.map(emojiInfo)}</dl>
    </div>
  );
}

export default App;
