import React, { FC, useState } from "react";
import { IUserListProps } from "./types";

const UserList: FC<IUserListProps> = ({ users }) => {
  const [state, setState] = useState(0);
  return (
    <div style={{}}>
      {users.map((user) => (
        <div key={user.id} style={{padding: '15px', border: '1px solid black'}}>
          {user.id}. {user.name} проживает в городе {user.address.city}
        </div>
      ))}
    </div>
  );
};

export default UserList;
