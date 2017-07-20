import React from 'react';

function Search(props) {
  let foundTracksList = props.found.map((t, idx) => {
    return (
      <div key={idx}>
        {t}
      </div>
    );
  });
  return (
    <div className="search-bar">
      <div className="input-group">
        <input
          type="text"
          placeholder="Search library for..."
          value={props.filterText}
          onChange={props.handleChange}
        />
        <span>
          <button type="button">Search</button>
        </span>
      </div>
      <div>
        {foundTracksList}
      </div>
    </div>
  );
}

export default Search;
