import React from "react";

export default class SearchBar extends React.Component {
  handleChange = (e) => {
    this.props.onChange(e);
  };

  render() {
    const { filterText, inStockOnly } = this.props;
    return (
      <fieldset>
        <legend>Product Search</legend>
        <form>
          <input
            type="text"
            name="filterText"
            placeholder="Search....."
            value={filterText}
            onChange={this.handleChange}
          />{" "}
          <br />
          <label>
            <input
              name="inStockOnly"
              type="checkbox"
              checked={inStockOnly}
              onChange={this.handleChange}
            />{" "}
            Only show products in stock
          </label>
        </form>
      </fieldset>
    );
  }
}
