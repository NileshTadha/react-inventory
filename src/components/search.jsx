import React, { Component } from "react";
import ProductCard from "./productCard";
class Search extends Component {
  state = {
    product: [],
    flag: "",
    isLoaded: false,
    pageNo: 1
  };
  componentDidMount() {
    window.onscroll = () => {
      if (this.state.flag === "done") return;
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        this.setState({ pageNo: this.state.pageNo + 1 }, () =>
          this.onLoadFunc()
        );
      }
    };
    this.onLoadFunc();
  }
  onLoadFunc = () => {
    let searchContent = this.props.match.params.searchContent;
    let url =
      `http://172.20.49.76:8080/inventory/user/search?search_query=` +
      searchContent +
      "&pageNo=" +
      this.state.pageNo;
    // console.log(url);
    fetch(url, {
      method: "GET",

      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        if (this.state.pageNo !== 1) {
        }
        this.setState({
          product: [...this.state.product, ...json[0].product],
          flag: json[1].flag,
          isLoaded: true
        });
        // console.log(json);
      });
  };

  render() {
    return (
      <div>
        <div className="latest-products">
          <div className="container">
            <div className="row" id="searchProdDetails">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>Products from search</h2>
                </div>
              </div>
              {this.state.isLoaded &&
                this.state.product.map(json => (
                  <ProductCard key={json.prodId} json={json} />
                ))}
            </div>
          </div>
          {/* <button
            className="button"
            onClick={() => {
              this.loadMore();
            }}
          >
            load more
          </button> */}
        </div>

        {/* <Pagination
          pageNo={this.state.pageNo}
          searchContent={this.props.match.params.searchContent}
          flag={this.state.isLoaded && this.state.json[1].flag}
          onLoad={json => this.loadMore(json)}
        /> */}
      </div>
    );
  }
}

export default Search;
