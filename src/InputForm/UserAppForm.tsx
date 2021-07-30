import React from 'react';
import Percentage from './forms/Percentage';
import User from './forms/User';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

interface Form {
  handleChange: (e: any) => void,
  addUser: (e: any) => void,
  user: { value: string, name: string },
  percent: number,
}

const InputForm: React.FC<Form> = (props) => {
  const { handleChange, user, percent, addUser } = props;

  return (
    <div>
      <Box py={1}>
        <User handleChange={handleChange} value={user.value} />
      </Box>
      <Box py={1}>
        <Percentage handleChange={handleChange} value={percent} />
      </Box>
      <Box py={1}>
        <Button onClick={addUser} variant="contained" color="primary">
          Add User
        </Button>
      </Box>

    </div>
  );
}

export default InputForm;
