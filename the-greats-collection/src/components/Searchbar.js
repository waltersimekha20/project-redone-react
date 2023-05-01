import { useState } from "react";

function SearchStyles({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(query);
  }

  return (
    <form onSubmit={handleSubmit}>
      
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search..."
      />
      <button type="submit" />
      </form>)}
       

        export default SearchStyles;