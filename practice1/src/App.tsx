import React, { useState } from "react";
import Card from "./components/Card/Card";
import { CardVariant } from "./components/Card/types";
import UserList from "./components/UserList/UserList";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        city: "Gwenborough",
      },
    },
    {
      id: 2,
      name: "Leanne Graham1",
      email: "Sincere@april1.biz",
      address: {
        street: "Kulas Light1",
        city: "Gwenborough1",
      },
    },
  ]);
  return (
    <div>
      <Card
        width={"200px"}
        height={"200px"}
        variant={CardVariant.outlined}
        onClick={(num) => console.log(num)}
      >
        <button style={{ color: "red" }}>кнопка</button>
        <div>test</div>
      </Card>
      <UserList users={users} />
    </div>
  );
}

export default App;
