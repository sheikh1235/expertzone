import React, { Component } from "react";
import Product from "./Product/Product";
import products from "./product_list";
import Pagination from "react-paginate";

import "./Products.css";
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
      productsPerPage: 16,
      currentPage: 1,
    };
  }
  handlePageClick = (page) => {
    this.setState({
      currentPage: page.selected + 1,
    });

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  render() {
    // following three lines cuts the array of cards into 'no of cards per page'
    const indexOfLastProduct =
      this.state.currentPage * this.state.productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - this.state.productsPerPage;
    const currentProducts = this.state.products.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    ); // to implement pagination.

    const totalPages =
      (this.state.products.length + 1) / this.state.productsPerPage;

    return (
      <main className="ez_shop">
        <div className="ez_products_wrap">
          <div className="ez_product_list">
            {currentProducts.map((product) => (
              <Product product={product} />
            ))}
          </div>

          <Pagination
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={totalPages}
            marginPagesDisplayed={0}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </div>
      </main>
    );
  }
}

export default Products;
