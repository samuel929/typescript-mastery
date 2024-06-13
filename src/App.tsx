import { useGetUser } from "../api/queries";
import { useState } from "react";
import SearchInput from "./components/SearchInput";
import UserCardComponent from "./components/UserCardComponent";
import ReactPaginate from "react-paginate";
import { User } from "./types";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const { data } = useGetUser();
  const [itemOffset, setItemOffset] = useState(0);
  const filteredUsers = data?.data.filter((user: User) => {
    return user.first_name.toLowerCase().includes(search.toLowerCase());
  });
  const endOffset: number = itemOffset + Number(data?.per_page);
  const currentItems = filteredUsers?.slice(itemOffset, endOffset);

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset =
      (event.selected * Number(data?.per_page)) % Number(data?.data.length);

    setItemOffset(newOffset);
  };
  return (
    <div>
      <SearchInput search={search} setSearch={setSearch} />
      <div className='container mx-auto mt-10'>
        <h2 className='text-2xl font-bold mb-6'>User List</h2>
        <div className=' flex flex-wrap justify-center'>
          {currentItems &&
            currentItems.map((user: User) => (
              <UserCardComponent key={user.id} user={user} />
            ))}
        </div>
        <ReactPaginate
          breakLabel='...'
          nextLabel='next >'
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={data?.total_pages as number}
          previousLabel='< previous'
          renderOnZeroPageCount={null}
          containerClassName='flex justify-center items-center mt-4'
          pageClassName='btn btn-sm btn-outline mx-1'
          previousClassName='btn btn-sm btn-outline mx-1'
          nextClassName='btn btn-sm btn-outline mx-1'
          breakClassName='btn btn-sm btn-outline mx-1'
          activeClassName='btn-primary'
        />
      </div>
    </div>
  );
}

export default App;
