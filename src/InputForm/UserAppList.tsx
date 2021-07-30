import React from 'react';
import Chip from '@material-ui/core/Chip';

interface Users {
  users: { name: string, percent: number }[],
  handleDelete: (e: any) => void,
}

const InputForm: React.FC<Users> = (props) => {
  const { users, handleDelete } = props


  if (Array.isArray(users) && users.length > 0) return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {users.map((user, i) => (
        <li style={{ padding: 4 }} key={i}>
          <Chip
            label={<>{user.name}
              <span> {user.percent}%</span></>}
            onDelete={() => handleDelete(i)}
            color="primary"
          />
        </li>
      ))}
    </ul>
  );

  return null;
}

export default InputForm;
