import React from "react";
import { Input } from "react-daisyui";

type SearchBoxProps = {
  search: string;
  setSearch: (search: string) => void;
};

function SearchInput({ search, setSearch }: SearchBoxProps) {
  return (
    <div>
      {" "}
      <Input
        bordered
        type='text'
        placeholder='Search'
        className='w-24 md:w-auto'
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
      />
    </div>
  );
}

export default SearchInput;
