import { FieldProps } from "formik";
import React from "react";
import { TextField } from "@material-ui/core";

export const TextFormField: React.FC<FieldProps> = ({
  field,
  form,
  ...props
}) => {
  const errorText = form.touched[field.name] && form.errors[field.name];

  return (
    <TextField
      fullWidth
      margin="normal"
      helperText={errorText}
      error={!!errorText}
      {...field}
      {...props}
    />
  );
};
