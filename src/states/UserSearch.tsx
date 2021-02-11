import { useState } from "react";
const UserSearch: React.FC = () => {
  const users = [
    { name: "John", age: 23 },
    { name: "Mikhal", age: 40 },
  ];
  const [search, setsearch] = useState("");
  const [foundUser, setFoundUser] = useState<
    { name: string; age: number } | undefined
  >();
  const onClick = () => {
    setsearch("");

    const ans = users.find((user) => {
      return user.name === search;
    });
    setFoundUser(ans);
  };
  return (
    <div>
      <input value={search} onChange={(e) => setsearch(e.target.value)} />
      <button onClick={onClick}>search</button>
      {foundUser && foundUser.name}
    </div>
  );
};
export default UserSearch;
