import { Input } from "react-daisyui";
import "./App.css";
import { useGetUser } from "../api/queries";
import { useState } from "react";
import SearchInput from "./components/SearchInput";
import UserCardComponent from "./components/UserCardComponent";

function App() {
  const [search, setSearch] = useState("");
  const users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
  ];

  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <SearchInput search={search} setSearch={setSearch} />
      <div className='container mx-auto mt-10'>
        <h2 className='text-2xl font-bold mb-6'>User List</h2>
        <div className='grid gap-6'>
          {filteredUsers.map((user) => (
            <UserCardComponent key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
