import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import UserAppForm from './UserAppForm';
import UserAppList from './UserAppList';

interface UserListArray {
  percent: number,
  name: string,
}

const search = (array: { name: string, percent: number }[], keyword: string) => {
  return array.find(({ name }) => name === keyword)
}

const InputForm: React.FC = () => {
  const [user, setUser] = useState('')
  const [message, setMessage] = useState({
    user: '',
    percent: '',
    missingField: '',
  })
  const [percent, setPercent] = useState(0)
  const [userList, setUserList] = useState<UserListArray[]>([])

  const handleChange = (e: any) => {
    if (e.target.name === 'user') {
      if (search(userList, e.target.value)) {
        setMessage({ ...message, user: 'User Already in list' })
        return;
      }
      setUser(e.target.value)
      return;
    }

    setPercent(Number.parseInt(e.target.value))
  }

  const calc = userList.reduce((total, curr) => {
    return total + curr.percent;
  }, 0)

  const addNewUser = () => {
    if (calc >= 100) {
      setMessage({ ...message, percent: 'Percent is 100%' })
      return;
    };

    if (user.length === 0 || percent < 1) {
      setMessage({ ...message, missingField: 'One of the fields is empty' })
      return
    };

    setUserList([...userList, { name: user, percent: percent }])
    setUser('');
    setMessage({ user: '', percent: '', missingField: '', })
  }

  const handleDelete = (index: number) => {
    userList.splice(index, 1);
    setUserList([...userList]);
  }

  return (
    <Box width='350px'>
      <Button onClick={() => console.log(userList)} color='secondary' variant="contained">Save</Button>
      <UserAppForm
        handleChange={handleChange}
        percent={percent}
        message={message}
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
