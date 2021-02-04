// import logo from './logo.svg';
import React from "react";
import SearchSuggestion from "./components/SearchSuggestion/SearchSuggestion";
import SearchInput from "./components/SearchInput/SearchInput";
import copyToClipboard from "./utils/copyToClipboard";

import "./App.css";

function Fetch({ url, children }) {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => setData(res));
  }, [url]);

  return children(data);
}

function SuggestionList({ input, setSelectedSong }) {
  if (input && input.length) {
    return (
      <Fetch url={`https://api.lyrics.ovh/suggest/${input}`}>
        {data => {
          if (data && !data.data) {
            return <h4>Loading</h4>;
          }
          if (data && data.data && data.data.length === 0) {
            return <h4>loading</h4>;
          }
          return data.data.map(item => (
            <SearchSuggestion
              data={item}
              key={item.id}
              onSuggestionClick={setSelectedSong}
            />
          ));
        }}
      </Fetch>
    );
  } else {
    return <></>;
  }
}

function LyricsSection({ selectedSong, setSelectedSong }) {
  const [copyMessage, setCopyMessage] = React.useState('Click To Copy');

  if (selectedSong && selectedSong.artist) {
    return (
      <div className="lyrics-section">
        <div className="lyrics-title">
          {selectedSong.title}
          <button
            type="button"
            className="btn btn-sm"
            onClick={() => setSelectedSong({})}
          >
            Back
          </button>
        </div>

        <Fetch
          url={`https://api.lyrics.ovh/v1/${selectedSong.artist.name}/${selectedSong.title}`}
        >
          {data => {
            if (data && !data.lyrics) {
              return <h4>loading...</h4>;
            }
            return (
              <>
                 <button
                  type="button"
                  className="btn btn-lg"
                  onClick={() => copyToClipboard(data.lyrics).then(setCopyMessage('Copied'))}
                >
                  {copyMessage}
                </button>
                <div
                  className="lyrics-description"
                  dangerouslySetInnerHTML={{
                    __html: data.lyrics.replace(/\n/g, "<br />")
                  }}
                ></div>
             
              </>
            );
          }}
        </Fetch>
      </div>
    );
  } else {
    return <></>;
  }
}
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
