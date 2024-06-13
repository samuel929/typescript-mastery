import React from "react";
import { Input } from "react-daisyui";

interface ISearchBoxProps extends ISearchChangeHandler {
  search: string;
}

interface ISearchChangeHandler {
  setSearch: (search: string) => void;
}

function SearchInput({ search, setSearch }: ISearchBoxProps) {
  return (
    <div>
      {" "}
      <Input
        bordered
        type='text'
        placeholder='Search'
        className='w-24 md:w-auto'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
