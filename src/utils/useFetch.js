import React from "react";

function useFetch(url, opts) {
  const [response, setResponse] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    fetch(url, opts)
      .then(res => res.json())
      .then(res => {
        setResponse(res);
        setLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setLoading(false);
      });
  }, [url, opts]);
  return [response, loading, hasError];
}

export default useFetch;
