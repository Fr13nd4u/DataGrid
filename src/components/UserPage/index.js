import React, { useState } from 'react';
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

  const userItem = [data?.users.find(item => item.UserID == params.id)] // eslint-disable-line 

  // const [dataItem, setDataItem] = useState(userItem);
  const [openForm, setOpenForm] = useState(false);
  const [editItem, setEditItem] = useState({
    UserID: 1,
  });

  const enterEdit = (item) => {
    setOpenForm(true);
    setEditItem(item);
  };

  const handleSubmit = (event) => {
    console.log(event);
    // тут будет хук edit

    // setDataItem(newData);
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
      <td className={!!props.dataItem[props.field] ? 'text-yes' : 'text-no'}>
        {props.dataItem[props.field] ? 'Yes' : 'No'}
      </td>
    )
  }

  return (
    <div className="container">
      { !data ? 
        <p>Loading profile...</p>
        :
        <Grid
          data={!!data?.users ? userItem : []} 
          editField="inEdit"
        >
          <Column field="UserID" title="ID" width="100px" editable={false} />
          <Column field="UserName" title="User Name" width="300px" />
          <Column field="FullName" title="Full Name" />
          <Column
            field="LastLogin"
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
