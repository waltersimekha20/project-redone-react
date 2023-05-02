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
        id="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search..."
      />
      <input type="Submit" value="Search"></input>
      </form>)}
       

        export default SearchStyles;