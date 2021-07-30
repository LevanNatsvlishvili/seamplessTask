import React from 'react';
import TextField from '../../Components/TextField';

interface Props {
  value: string,
  handleChange: (e: any) => void,
}

const User: React.FC<Props> = (props) => {
  const { handleChange, value } = props;

  return (
    <TextField
      options={options}
      onChange={handleChange}
      select={true}
      name='user'
      value={value}
      label="User" />
  );
}

export default User;

const options = [
  {
    value: 'Levan Natsvlishvili',
    label: "Levan Natsvlishvili"
  },
  {
    value: 'Jondo Bondo',
    label: "Jondo Bondo"
  },
  {
    value: 'Elon Maskyani',
    label: "Elon Maskyani"
  },
]