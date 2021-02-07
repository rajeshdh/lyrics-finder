// import logo from './logo.svg';
import React from "react";
import SearchInput from "./components/SearchInput/SearchInput";
import SuggestionList from "./components/SuggestionList/SuggestionList";
import LyricsSection from "./components/LyricsSection/LyricsSection";

import "./App.css";


function App() {
  const [input, setInput] = React.useState("");
  const [selectedSong, setSelectedSong] = React.useState({});
  let heroSectionClass =
    input && input.length ? "hero-section small" : "hero-section large";

  return (
    <div className="App">
      <div className={heroSectionClass}>
        <header className="App-header">Oh My Lyrics</header>
        <div className="App-header-description">
          Never forget the lyrics to your favorite songs again...
        </div>
      </div>
      <div className="search">
        <SearchInput
          placeholder="Search by artist or song"
          className="search-box"
          value={input}
          onSearchChange={setInput}
        />
        {!selectedSong.id && (
          <SuggestionList input={input} setSelectedSong={setSelectedSong} />
        )}
      </div>
      <LyricsSection
        selectedSong={selectedSong}
        setSelectedSong={setSelectedSong}
      />
    </div>
  );
}

export default App;
