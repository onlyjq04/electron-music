import React from 'react';

class Search extends React.Component {
  render() {
    let foundTracksList = this.props.found.map((t, idx) => {
      return (
        <div key={idx}>{t}</div>
      );
    });
    return (
      <div className="search-bar">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search library for..."
            value={this.props.filterText}
            onChange={this.props.handleChange}
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
}

export default Search;