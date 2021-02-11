import { useState } from "react";
const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);
  const onClick = () => {
    setName("");
    setGuests([...guests, name]);
  };
  return (
    <div>
      <h3>GuestList</h3>
      {guests.map((guest) => {
        return <li>{guest}</li>;
      })}

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guests</button>
    </div>
  );
};
export default GuestList;
