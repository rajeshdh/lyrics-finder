import React from "react";
import useFetch from "../../utils/useFetch";
import copyToClipboard from "../../utils/copyToClipboard";

function LyricsSection({ selectedSong, setSelectedSong }) {
  const [copyMessage, setCopyMessage] = React.useState("Copy Lyrics");
  const [response, loading, hasError] = useFetch(
    `https://api.lyrics.ovh/v1/${selectedSong.artist.name}/${selectedSong.title}`
  );

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : hasError ? (
        <div>An Error occurred, Please try again later.</div>
      ) : (
        response &&
        (response.lyrics || response.lyrics.length === 0) && (
          <div className="lyrics-section container">
            <div>
              <button
                type="button"
                className="btn btn-sm"
                onClick={() => setSelectedSong({})}
              >
                Back To Search Results
              </button>
              {response.lyrics.length !== 0 && (
                <button
                  type="button"
                  className="btn btn-sm"
                  disabled={copyMessage === 'Copied'}
                  onClick={() =>
                    copyToClipboard(response.lyrics).then(
                      setCopyMessage("Copied")
                    )
                  }
                >
                  {copyMessage}
                </button>
              )}
            </div>
            <div className="lyrics-title">{selectedSong.title}</div>

            {response.lyrics.length === 0 ? (
              <div className="lyrics-description">Sorry, No Lyrics found.</div>
            ) : (
              <div
                className="lyrics-description"
                dangerouslySetInnerHTML={{
                  __html: response.lyrics.replace(/\n/g, "<br />")
                }}
              ></div>
            )}
          </div>
        )
      )}
    </>
  );
}

export default LyricsSection;
