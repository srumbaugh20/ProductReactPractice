import React, { Component } from 'react';

export default class Search extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." value={this.props.filterText} onChange={this.props.searchStuff} />
        <p>
          <input type="checkbox" checked={this.props.inStockOnly} onChange={this.props.checkBox} />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}
