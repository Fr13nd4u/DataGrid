import React from 'react';
import { Error } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";

const UserNameInput = (fieldRenderProps) => {
  const { validationMessage, visited, ...others } = fieldRenderProps;
  return (
    <div>
      <Input {...others} />
      {visited && validationMessage && <Error>{validationMessage}</Error>}
    </div>
  );
}

export default UserNameInput