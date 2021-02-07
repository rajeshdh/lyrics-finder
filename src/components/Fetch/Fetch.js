import React from 'react';

function Fetch({ url, children }) {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(res => setData(res));
    }, [url]);
  
    return children(data);
  }
  
export default Fetch  