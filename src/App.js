import React from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import './App.css';
import { Grid, GridColumn  } from "@progress/kendo-react-grid";
import products from "./products.json";

const App = () =>  {
  return (
    <Grid
      data={products}
    >
      <GridColumn field="ProductID" title="ID" width="40px" />
      <GridColumn field="ProductName" title="Name" width="250px" />
      <GridColumn field="Category.CategoryName" title="CategoryName" />
      <GridColumn field="UnitPrice" title="Price" />
      <GridColumn field="UnitsInStock" title="In stock" />
    </Grid>
  )
}

export default App;
