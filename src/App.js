import React, { Component } from 'react';
import Products from './products'
import Search from './search'
import './App.css';

const products = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
  }

  searchStuff = (event)=>{
    this.setState({filterText:event.target.value})
  }

  checkBox = (event)=>{
    this.setState({inStockOnly:event.target.checked})
  }

render() {
    return (
      <div>

        <Search
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          searchStuff={this.searchStuff}
          checkBox={this.checkBox}
        />

        <Products 
          products={products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />

      </div>

  )}
}

export default App;
