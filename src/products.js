import React, { Component } from 'react';
import ProductCategoryRow from './productCategory'
import ProductRow from './productRow'
import './App.css';


export default class Products extends Component {
render() {
  const rows=[];
  const lastCategory = null;
  this.props.products.forEach((product)=>{
    if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)){
      return;
    }
    if (product.category !== lastCategory){
      rows.push(<ProductCategoryRow category={product.category} key={product.category}/>)
    }
    rows.push(<ProductRow product={product} key={product.name}/>)
  })
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>



      </div>


  )}
}
