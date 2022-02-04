import React, { useState } from 'react';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { filterBy,orderBy } from "@progress/kendo-data-query";

import {users} from "../../data/users"
import AddUser from '../AddUser';

const initialFilter = {
  logic: "and",
  filters: [
    {
      field: "UserName",
      operator: "contains",
      value: "",
    },
  ],
};

const initialSort = [
  {
    field: "UserID",
    dir: "asc",
  },
];

const initialDataState = {
  skip: 0,
  take: 10,
};

const BooleanCell = (props) => {
  return (
    <td>{props.dataItem[props.field] ? 'Yes' : 'No'}</td>
  )
}

const Table = () => {
  const [filter, setFilter] = useState(initialFilter);
  const [page, setPage] = useState(initialDataState);
  const [sort, setSort] = useState(initialSort);

  const pageChange = (event) => {
    setPage(event.page);
  };

  return (
    <div className='container'>
      <AddUser />
      <Grid
        data={filterBy(orderBy(users.slice(page.skip, page.take + page.skip), sort),filter)}
        filterable={true}
        pageable={true}
        sortable={true}
        total={users.length}
        skip={page.skip}
        take={page.take}
        filter={filter}
        sort={sort}
        onSortChange={(e) => setSort(e.sort)}
        onFilterChange={(e) => setFilter(e.filter)}
        onPageChange={pageChange}
        onRowClick={(e) => console.log(e.dataItem.UserID)}
        >
        <Column field="UserID" title="ID" filterable={false} width="50px" />
        <Column field="UserName" title="User Name" width="300px" />
        <Column field="FullName" title="Full Name" />
        <Column
          field="LastLogin"
          title="Last Login"
          filter="date"
          format="{0:D}"
          />
        <Column field="Enabled" filter="boolean" cell={BooleanCell} width="100px"/>
      </Grid>
    </div>
  );
};

export default Table;
