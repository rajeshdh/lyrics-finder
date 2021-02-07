import React from 'react';
import Fetch from "../Fetch/Fetch";
import copyToClipboard from "../../utils/copyToClipboard";

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

  export default LyricsSection;