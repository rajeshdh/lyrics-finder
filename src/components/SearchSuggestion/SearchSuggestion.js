import user from "../../images/user.png";
import musicNote from "../../images/music-note.png";

function searchSuggestion({ data, onSuggestionClick }) {
  const { album, artist, title } = data;
  return (
    <div className="search-suggestion">
      <img src={album.cover_medium} className="image" alt="album cover" />

      <div className="artist-song item">
        <p className="value-description">
          <img src={user} className="app-icon" alt="artist" /> {artist.name}
        </p>
        <p className="value-description">
          <img src={musicNote} className="app-icon" alt="song title" /> {title.substring(0,50)}
        </p>
      </div>
      <button type="button" className="btn btn-sm item" onClick= {() => onSuggestionClick(data)}>
        Get Lyrics
      </button>
      {/* <div>
        <audio controls>
        
          <source src={preview} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div> */}
      {/* <img src={playArrow} className="app-icon-button" alt="logo" /> */}
    </div>
  );
}
export default searchSuggestion;
