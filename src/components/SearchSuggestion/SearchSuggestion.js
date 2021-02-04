import playArrow from "../../images/playArrow.png";
import user from "../../images/user.png";
import musicNote from "../../images/music-note.png";
import heroBackground from "../../images/hero-background.jpg";

function searchSuggestion({ data, onSuggestionClick }) {
  const { album, artist, title, preview, id } = data;
  return (
    <div className="search-suggestion">
      <img src={album.cover_medium} className="image" alt="logo" />

      <div className="artist-song">
        <div className="artist">
          <img src={user} className="app-icon" alt="logo" /> {artist.name}
        </div>
        <div className="song">
          <img src={musicNote} className="app-icon" alt="logo" /> {title}
        </div>
      </div>
      <button type="button" className="btn btn-sm" onClick= {() => onSuggestionClick(data)}>
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
