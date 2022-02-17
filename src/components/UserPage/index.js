import React, { useEffect, useState } from 'react';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { useParams } from "react-router-dom";

import EditForm from "./EditForm";
import { useGetFetch } from '../../hooks/useUserFetch';

const EditCommandCell = (props) => {
  return (
    <td>
      <button
        className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
        onClick={() => {props.enterEdit(props.dataItem)}}
      >
        Edit
      </button>
    </td>
  );
};

const UserPage = () => {
  const { data } = useGetFetch();
  const params = useParams();
  const [users, setUsers] = useState(null);

  useEffect(() => {
    setUsers(data)
    setDataItem(formatUser)
  }, [data, users]); // eslint-disable-line 
  
  const userItem = [users?.users.find(item => item.UserID == params.id)] // eslint-disable-line 
  
  const formatUser = users && userItem.map(current => {
    let newUsers = Object.assign({}, current);
    newUsers.formatLastLogin = new Date(current.LastLogin)
    return newUsers
  })

  const [dataItem, setDataItem] = useState(formatUser);
  const [openForm, setOpenForm] = useState(false);
  const [editItem, setEditItem] = useState({
    UserID: 1,
  });
  
  const enterEdit = (item) => {
    setOpenForm(true);
    setEditItem(item);
  };

  const handleSubmit = (event) => {
    let newData = dataItem.map((item) => {
      if (event.UserID === item.UserID) {
        item = { ...event };
      }

      return item;
    });
    setDataItem(newData);
    setOpenForm(false);
  };

  const handleCancelEdit = () => {
    setOpenForm(false);
  };

  const MyEditCommandCell = (props) => (
    <EditCommandCell {...props} enterEdit={enterEdit} />
  );

  const BooleanCell = (props) => {
    return (
      <td className={props.dataItem[props.field] ? 'text-yes' : 'text-no'}>
        {props.dataItem[props.field] ? 'Yes' : 'No'}
      </td>
    )
  }

  return (
    <div className="container">
      { !users ? 
        <p>Loading profile...</p>
        :
        <Grid
          data={dataItem} 
          editField="inEdit"
        >
          <Column field="UserID" title="ID" width="100px" editable={false} />
          <Column field="UserName" title="User Name" width="300px" />
          <Column field="FullName" title="Full Name" />
          <Column
            field="formatLastLogin"
            title="Last Login"
            format="{0:D}"
            />
          <Column 
            field="Enabled" 
            cell={BooleanCell} 
            width="100px"
          />
          <Column cell={MyEditCommandCell} width="70px" />
        </Grid>
      }

      {openForm && (
        <EditForm
          cancelEdit={handleCancelEdit}
          onSubmit={handleSubmit}
          item={editItem}
        />
      )}
    </div>
  );
};

export default UserPage;
