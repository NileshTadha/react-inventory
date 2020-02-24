import React, { Component } from "react";
import ProductCard from "./productCard";
import Pagination from "./pagination";
class Search extends Component {
  state = {
    json: [],
    loading: false,
    pageNo: 1
  };
  componentDidMount() {
    this.onLoadFunc();
  }
  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.match.params.pageNo !== this.props.match.params.pageNo) {
      this.setState({ pageNo: nextProps.match.params.pageNo }, () => {
        this.onLoadFunc();
      });
    }
  }
  onLoadFunc = () => {
    let searchContent = this.props.match.params.searchContent;
    // this.setState({ pageNo: this.props.match.params.pageNo });
    // let pageNo = this.state.pageNo;
    let url =
      `http://172.20.49.40:8080/inventory/user/search?search_query=` +
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
        this.setState({ json: json, loading: true });
        // console.log(json);
      });
  };

  render() {
    let i = 0;

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
              {this.state.loading &&
                this.state.json[0].product.map(json => (
                  <ProductCard key={i++} json={json} />
                ))}
            </div>
          </div>
        </div>
        <Pagination
          pageNo={this.state.pageNo}
          searchContent={this.props.match.params.searchContent}
          flag={this.state.loading && this.state.json[1].flag}
        />
      </div>
    );
  }
}

export default Search;
