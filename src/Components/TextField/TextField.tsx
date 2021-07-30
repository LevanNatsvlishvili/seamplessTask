import React from "react";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

interface Props {
  options?: { value: string, label: string }[] | undefined,
  onChange: (e: any) => void,
  select?: boolean,
  name?: string,
  label: string,
  value: string | number,
  type?: string,
  inputProps?: any,
  // rest: any,
}

const InputField: React.FC<Props> = (props) => {
  const { options, value, onChange, type, ...rest } = props

  return (
    <TextField
      fullWidth
      value={value}
      variant='outlined'
      onChange={onChange}
      type={type}
      {...rest}
    >
      {Array.isArray(options) ? options.map((option, index) => {

        return (
          <MenuItem key={index} value={option.value} >
            {option.label}
          </MenuItem>
        )
      }) : null}
    </TextField>
  );
}

export default InputField;