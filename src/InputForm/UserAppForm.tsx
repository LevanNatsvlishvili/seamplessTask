import React from 'react';
import Percentage from './forms/Percentage';
import User from './forms/User';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

interface Form {
  handleChange: (e: any) => void,
  addUser: (e: any) => void,
  user: string,
  percent: number,
  message: { user: string, percent: string, missingField: string },
}

const InputForm: React.FC<Form> = (props) => {
  const { handleChange, user, percent, addUser, message } = props;

  return (
    <div>
      <Box py={1}>
        <User handleChange={handleChange} value={user} />
        <p>{message.user}</p>
      </Box>
      <Box py={1}>
        <Percentage handleChange={handleChange} value={percent} />
        <p>{message.percent}</p>
      </Box>
      <Box py={1}>
        <p>{message.missingField}</p>
        <Button onClick={addUser} variant="contained" color="primary">
          Add User
        </Button>
      </Box>

    </div>
  );
}

export default InputForm;
