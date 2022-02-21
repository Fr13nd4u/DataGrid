import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { Dialog, DialogActionsBar } from "@progress/kendo-react-dialogs";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Checkbox, Input, } from "@progress/kendo-react-inputs";

import UserNameInput from '../Inputs/UserNameInput';
import { useAddUser } from '../../hooks/useUserFetch';
import { userNameValidator } from '../../hooks/useValidators';

const AddUser = () => {
  const PostUser = useAddUser();
  const [visible, setVisible] = useState(false);
  const { data } = useSelector((state) => state.user)


  const handleSubmit = (dataItem) => { 
    PostUser({
      UserName: dataItem.UserName,
      FullName: `${dataItem.FirstName} ${dataItem.LastName}`,
      Enabled: dataItem.Enabled
    });
    setVisible(false);
  }

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
        New User
      </button>

      {visible && (
        <Dialog title={"Add new user"} onClose={toggleDialog}>
          <Form
            onSubmit={handleSubmit}
            render={(formRenderProps) => (
              <FormElement
                style={{
                  width: 450,
                }}
              >
                <fieldset className={"k-form-fieldset"}>
                  <div style={{marginTop: '20px'}}>
                    <Field
                      name={"UserName"}
                      component={UserNameInput}
                      label={"User Name"}
                      validator={(_) => userNameValidator(_ , data)}
                    />
                  </div>
                  <div style={{marginTop: '20px'}}>
                    <Field
                      name={"FirstName"}
                      component={Input}
                      label={"First Name"}
                    />
                  </div>
                  <div style={{marginTop: '20px'}}>
                    <Field
                      name={"LastName"}
                      component={Input}
                      label={"Last Name"}
                    />
                  </div>
                  <div style={{marginTop: '20px'}}>
                    <Field
                      name={"Enabled"}
                      component={Checkbox}
                      label={"Enabled"}
                    />
                  </div>
                </fieldset>
                
              <DialogActionsBar>
                <div className="k-form-buttons">
                  <button
                    type={"submit"}
                    className="k-button k-button-md k-rounded-md k-button-solid"
                    style={{width: '100%'}}
                    disabled={!formRenderProps.allowSubmit}
                  >
                    Submit
                  </button>
                </div>
              </DialogActionsBar>
              </FormElement>
            )}
          />
        </Dialog>
      )}
    </>
  )
};

export default AddUser;
