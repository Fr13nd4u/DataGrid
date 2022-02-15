import * as React from "react";
import { Dialog } from "@progress/kendo-react-dialogs";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Checkbox, Input, } from "@progress/kendo-react-inputs";
import { DatePicker } from "@progress/kendo-react-dateinputs";

const EditForm = (props) => {
  return (
    <Dialog title={`Edit ${props.item.UserName}`} onClose={props.cancelEdit}>
      <Form
        onSubmit={props.onSubmit}
        initialValues={props.item}
        render={(formRenderProps) => (
          <FormElement
            style={{
              maxWidth: 650,
            }}
          >
            <fieldset className={"k-form-fieldset"}>
              <div style={{marginTop: '20px'}}>
                <Field
                  name={"UserName"}
                  component={Input}
                  label={"User Name"}
                />
              </div>
              <div style={{marginTop: '20px'}}>
                <Field
                  name={"FullName"}
                  component={Input}
                  label={"Full Name"}
                />
              </div>
              <div style={{marginTop: '20px'}}>
                <Field
                  name={"LastLogin"}
                  component={DatePicker}
                  label={"Last Login"}
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
            <div className="k-form-buttons">
              <button
                type={"submit"}
                className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
                disabled={!formRenderProps.allowSubmit}
              >
                Update
              </button>
              <button
                type={"submit"}
                className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
                onClick={props.cancelEdit}
              >
                Cancel
              </button>
            </div>
          </FormElement>
        )}
      />
    </Dialog>
  );
};

export default EditForm;