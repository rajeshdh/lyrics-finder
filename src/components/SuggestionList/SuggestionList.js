import SearchSuggestion from "../SearchSuggestion/SearchSuggestion";
import useFetch from "../../utils/useFetch";

function SuggestionList({ input, setSelectedSong }) {
    const [response, loading, hasError] = useFetch(`https://api.lyrics.ovh/suggest/${input}`)

      return (
          <>
          {loading ? <div>Loading...</div> : (hasError ? <div>An Error occurred, Please try again later.</div> :
            response && response.data.map(item => (
              <SearchSuggestion
                data={item}
                key={item.id}
                onSuggestionClick={setSelectedSong}
              />
              )))}
          </>
      );
    
  }

  export default SuggestionList;