import React from "react";
import Fetch from "../Fetch/Fetch";
import copyToClipboard from "../../utils/copyToClipboard";

function LyricsSection({ selectedSong, setSelectedSong }) {
  const [copyMessage, setCopyMessage] = React.useState("Copy Lyrics");

  if (selectedSong && selectedSong.artist) {
    return (
      <div className="lyrics-section container">
        <Fetch
          url={`https://api.lyrics.ovh/v1/${selectedSong.artist.name}/${selectedSong.title}`}
        >
          {data => {
            if (data && !data.lyrics) {
              return <h4>loading...</h4>;
            }
            return (
              <>
                 <div>
                  <button
                    type="button"
                    className="btn btn-sm"
                    onClick={() => setSelectedSong({})}
                  >
                    Back To Search Results
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm"
                    onClick={() =>
                      copyToClipboard(data.lyrics).then(
                        setCopyMessage("Copied")
                      )
                    }
                  >
                    {copyMessage}
                  </button>
                </div>
                <div className="lyrics-title">{selectedSong.title}</div>
             

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
