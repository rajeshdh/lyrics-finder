import SearchSuggestion from "../SearchSuggestion/SearchSuggestion";
import Fetch from "../Fetch/Fetch";

function SuggestionList({ input, setSelectedSong }) {
    if (input && input.length) {
      return (
        <Fetch url={`https://api.lyrics.ovh/suggest/${input}`}>
          {data => {
            if (data && !data.data) {
              return <h4>Loading...</h4>;
            }
            if (data && data.data && data.data.length === 0) {
              return <h4>loading...</h4>;
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

  export default SuggestionList;