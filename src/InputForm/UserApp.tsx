import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import UserAppForm from './UserAppForm';
import UserAppList from './UserAppList';
import { useEffect } from 'react';

interface UserForm {
  value: string,
  name: string,
}

interface UserListArray {
  percent: number,
  name: string,
}

const InputForm: React.FC = () => {
  const [user, setUser] = useState<UserForm>({
    value: '', name: ''
  })

  const [percent, setPercent] = useState(0)
  const [userList, setUserList] = useState<UserListArray[]>([])

  const handleChange = (e: any) => {
    if (e.target.name === 'user') {
      setUser(e.target)
      return;
    }

    setPercent(Number.parseInt(e.target.value))
  }

  const calc = userList.reduce((total, curr) => {
    return total + curr.percent;
  }, 0)

  const addNewUser = () => {
    if (calc >= 100) return;

    if (user.value.length === 0 || percent < 1) return;

    setUserList([...userList, { name: user.value, percent: percent }])
  }

  const handleDelete = (i: number) => {
    userList.splice(i, 1);
    setUserList([...userList]);
  }

  return (
    <Box width='350px'>
      <Button onClick={() => console.log(userList)} color='secondary' variant="contained">Save</Button>
      <UserAppForm
        handleChange={handleChange}
        percent={percent}
        user={user}
        addUser={addNewUser}
      />
      <UserAppList
        handleDelete={handleDelete}
        users={userList} />
    </Box>
  );
}

export default InputForm;
