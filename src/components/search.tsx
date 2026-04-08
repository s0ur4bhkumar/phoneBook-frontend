import type React from "react";

type SearchProps = {
  value: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
        onChange={(e) => onchange(e)}
      />
    </>
  );
}
