import React from "react";
import "./App.css";
// import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

import products from "./products";

// const useStyles = makeStyles({
//   root: {
//     minWidth: 575,
//   },
//   bullet: {
//     display: "inline-block",
//     margin: "0 2px",
//     transform: "scale(0.8)",
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

class FilterableproductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      inStockOnly: false,
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = name === "inStockOnly" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    // const classes = useStyles();
    const productDetails = [];
    const testDetails = {};
    products.forEach((product) => {
      if (product.name.indexOf(this.state.filterText) === -1) {
        return;
      }
      if (this.state.inStockOnly && !product.stocked) {
        return;
      }

      const { category, name, price, stocked } = product;

      if (testDetails.hasOwnProperty(category)) {
        testDetails[category].push({ name, price, stocked });
      } else {
        testDetails[category] = [];
        testDetails[category].push({ name, price, stocked });
      }
    });

    for (let prop in testDetails) {
      productDetails.push({
        productCategory: prop,
        products: testDetails[prop],
      });
    }

    return (
      <div className="App">
        <header className="App-header">
          {/* <Card className={classes.root}> */}
          <Card>
            <CardContent>
              <SearchBar
                filterText={this.state.filterText}
                inStockOnly={this.state.inStockOnly}
                onChange={this.handleChange}
              />
              <ProductTable
                productDetails={productDetails}
                filterText={this.state.filterText}
                inStockOnly={this.state.inStockOnly}
              />
            </CardContent>
          </Card>
        </header>
      </div>
    );
  }
}

export default FilterableproductTable;
