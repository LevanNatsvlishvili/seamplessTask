import React from 'react';
import TextField from '../../Components/TextField';

interface Props {
  value: number,
  handleChange: (e: any) => void,
}

const User: React.FC<Props> = (props) => {
  const { handleChange, value } = props;

  return (
    <TextField
      type='number'
      value={value}
      select={false}
      name='percentage'
      onChange={handleChange}
      inputProps={{ min: 0 }}
      label="Percentage" />
  );
}

export default User;
