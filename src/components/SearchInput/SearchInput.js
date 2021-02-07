// function debounce(callback, wait) {
//   let timeout;
//   return (...args) => {
//     clearTimeout(timeout);
//     timeout = setTimeout(function() {
//       callback.apply(this, args);
//     }, wait);
//   };
// }
function SearchInput({ placeholder, onSearchChange, ...rest }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={(e) => onSearchChange(e.target.value)}
      {...rest}
    />
  );
}

export default SearchInput;
