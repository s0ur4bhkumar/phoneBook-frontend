import type React from "react";

type SearchProps = {
  value: string;
  onchange: React.ChangeEventHandler<HTMLInputElement>;
};

export function Search({ value, onchange }: SearchProps) {
  return (
    <>
      <label htmlFor="Search">Search: </label>
      <input
        type="search"
        name="search"
        id="Search"
        value={value}
        onChange={onchange}
      />
    </>
  );
}
