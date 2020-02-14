import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchBar extends Component {
  state = { searchContent: "" };
  myChange = event => {
    let name = event.target.name;
    let val = event.target.value;
    this.setState({ [name]: val });
  };

  render() {
    return (
      <div
        style={{
          textAlign: "center",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "30px"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <input
            type="text"
            style={{ width: "80%", fontSize: "16px" }}
            // id="search"
            onBlur={this.myChange}
            name="searchContent"
            placeholder="Search...."
          />
          <Link to={`/search/${this.state.searchContent}`}>
            <input type="button" className="button" value="Search" />
          </Link>
        </div>
      </div>
    );
  }
}

export default SearchBar;
