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
