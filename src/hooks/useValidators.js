const userNameRegex = new RegExp(/^[a-zA-Z0-9_]*$/);

export const userNameValidator = (value, data) => 
  !value
    ? "User Name field is required!"
    : !userNameRegex.test(value)
    ? "User Name is not in a valid format!"
    : value.length > 15 
    ? "User Name must be shorter than 15 characters!"
    : data.users.some(item => item.UserName.toLowerCase() === value.toLowerCase())
    ? "This name is already in the table!"
    : ""
  