import React, { Component } from "react";
import { Link } from "react-router-dom";

class Pagination extends Component {
  state = {};
  render() {
    // console.log(this.props);
    let curruntPage = parseInt(this.props.pageNo);
    let prePage = curruntPage;
    let nextPage = curruntPage;
    if (curruntPage !== 1) prePage = curruntPage - 1;
    if (this.props.flag !== "done") nextPage = curruntPage + 1;
    // if (curruntPage == 1) {
    //   alert("You are already in first page");
    //   return;
    // }
    return (
      <div style={{ textAlign: "center" }}>
        <Link to={`/search/${this.props.searchContent}/${prePage}`}>
          <button
            id="pre"
            key="1"
            onClick={() => {
              if (curruntPage === 1) alert("You are already on the first page");
            }}
            className="button"
          >
            {"<"}
          </button>
        </Link>

        <span id="pageNo" style={{ padding: "12px" }}>
          {this.props.pageNo}
        </span>

        <Link to={`/search/${this.props.searchContent}/${nextPage}`}>
          <button
            key="2"
            id="next"
            onClick={() => {
              if (this.props.flag === "done")
                alert("You are already on the last page");
            }}
            className="button"
          >
            {">"}
          </button>
        </Link>
      </div>
    );
  }
}

export default Pagination;
