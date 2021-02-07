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
    input && input.length ? "hero-section container  small" : "hero-section container large";

  return (
    <div className="container">
      <div className={heroSectionClass}>
      <h1 className="section-heading app-header">Oh My Lyrics</h1>
        <p className="section-description">
          Never forget the lyrics to your favorite songs again...
        </p>
      </div>
      <div className="container">
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
