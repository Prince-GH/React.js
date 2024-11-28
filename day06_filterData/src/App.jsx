import { useState } from 'react';

//------------------------------
const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];


//Components bottom to top
//Product row -name of product -price of the product

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
  <span style={{ color:'red'}}>
    {product.name}
  </span>

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

//Product catagory -headding>> category
function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan={2}>
        {category}
      </th>
    </tr>
  )
}

//Product table 
function ProductTable({  products, filterText, inStockOnly}) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product)=>{

    if( product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1 ){
      return;
    }

    if(inStockOnly && !product.stocked){
      return;
    }

    if(product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow 
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow 
      product={product}
      key={product.name} />
    );
    lastCategory = product.category;
  });

  return(
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

//Search Bar - textbox - checkbox

function SearchBar({ 
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return ( 
    <form>
      <input 
          type="text"
          value={filterText}
          placeholder="Search..."
          onChange={(e)=>onFilterTextChange(e.target.value)}
          />
      <br /><br />
      <label>
        <input 
          type="checkbox" 
          checked={inStockOnly}
          onChange={(e)=>onInStockOnlyChange(e.target.checked)}
          />
        {' '}
        Only show product in stock
      </label>
      <br /><br />
    </form>
  );
}

//FilterableProductTable - serchbar - producttable

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div>
    <SearchBar 
       filterText = {filterText} 
       inStockOnly = {inStockOnly}
       onFilterTextChange = {setFilterText}
       onInStockOnlyChange = {setInStockOnly} />
    <ProductTable 
       products = {products}
       filterText = {filterText} 
       inStockOnly = {inStockOnly} />
    </div>
  );
}

export default function App (){
  return <FilterableProductTable products={PRODUCTS} />
}