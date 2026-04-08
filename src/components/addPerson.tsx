import type React from "react";

type AddPersonProps = {
  onSubmit: React.SubmitEventHandler<HTMLFormElement>;
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
  Name: string;
  Number: number | undefined | string;
};

export function AddPerson({
  onSubmit,
  Name,
  Number,
  onChangeName,
  onChangeNumber,
}: AddPersonProps) {
  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <label htmlFor="Name">Name: </label>
          <input
            type="text"
            id="Name"
            value={Name}
            onChange={(e) => onChangeName(e)}
          />
        </div>
        <div>
          <label htmlFor="Number">Number:</label>
          <input
            type="number"
            id="Number"
            value={Number || ""}
            onChange={(e) => onChangeNumber(e)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </>
  );
}
