import React, { useState } from 'react';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { filterBy,orderBy } from "@progress/kendo-data-query";
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';

import AddUser from '../AddUser';
import { useGetFetch } from '../../hooks/useUserFetch';

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
    <td className={props.dataItem[props.field] ? 'text-yes' : 'text-no'}>
      {props.dataItem[props.field] ? 'Yes' : 'No'}
    </td>
  )
}

const Table = () => {
  const { isFetching, data, error} = useGetFetch();
  const [filter, setFilter] = useState(initialFilter);
  const [page, setPage] = useState(initialDataState);
  const [sort, setSort] = useState(initialSort);
  const navigate = useNavigate();

  console.log(isFetching);
  // console.log(error);
  console.log(data);

  // const {users} = data

  const pageChange = (event) => {
    setPage(event.page);
  };

  return (
    <div className="container">
      <AddUser />
      <Grid
        data={filterBy(orderBy(data.users.slice(page.skip, page.take + page.skip), sort),filter)}
        filterable={true}
        pageable={true}
        sortable={true}
        total={data.users.length}
        skip={page.skip}
        take={page.take}
        filter={filter}
        sort={sort}
        onSortChange={(e) => setSort(e.sort)}
        onFilterChange={(e) => setFilter(e.filter)}
        onPageChange={pageChange}
        onRowClick={(e) => navigate(`/user/${e.dataItem.UserID}`)}
        >
        <Column field="UserID" title="ID" filterable={false} width="100px" />
        <Column field="UserName" title="User Name" width="300px" />
        <Column field="FullName" title="Full Name" filterable={false} />
        <Column
          field="LastLogin"
          title="Last Login"
          filter="date"
          format="{0:D}"
          filterable={false}
          />
        <Column field="Enabled" filter="boolean" filterable={false} cell={BooleanCell} width="100px"/>
      </Grid> 
    </div>
  );
};

export default connect(
  state => ({
    data: state
  }),
  dispatch => ({})
)(Table);
