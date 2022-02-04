import React from 'react';
import { Dialog, DialogActionsBar } from "@progress/kendo-react-dialogs";

const AddUser = () => {
  const [visible, setVisible] = React.useState(false);

  const toggleDialog = () => {
    setVisible(!visible);
  };

  return (
    <>
      <button
        className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
        style={{
          marginBottom: "25px",
          background: "rgb(189 249 189)"
        }}
        onClick={toggleDialog}
      >
        Add User
      </button>
      {visible && (
        <Dialog title={"Please confirm"} onClose={toggleDialog}>
          <p
            style={{
              margin: "25px",
              textAlign: "center",
            }}
          >
            Are you sure you want to continue?
          </p>
          <DialogActionsBar>
            <button
              className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
              onClick={toggleDialog}
            >
              No
            </button>
            <button
              className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
              onClick={toggleDialog}
            >
              Yes
            </button>
          </DialogActionsBar>
        </Dialog>
      )}
    </>
  )
};

export default AddUser;
