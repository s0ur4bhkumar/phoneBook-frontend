import React, { useState } from "react";
import { Search } from "./components/search";
import { AddPerson } from "./components/addPerson";
import { PersonList, type person } from "./components/persons";

function App() {
  const [persons, setPersons] = useState<person[]>([]);
  const [person, setPerson] = useState<string>("");
  const [number, setNumber] = useState<number | undefined>();
  const [searchQuerry, setSearchQuerry] = useState("");
  function handlePerson(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setPerson(val);
  }

  function handleNumber(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setNumber(Number(val));
  }

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>): void {
    const val = e.target.value;
    setSearchQuerry(val);
  }

  function onSubmit(event: React.SubmitEvent<HTMLFormElement>): void {
    event.preventDefault();
    const addPerson: person = {
      id: crypto.randomUUID(),
      Name: person,
      Number: number,
    };
    const alreadyExist = persons.find(
      (person) => person.Name === addPerson.Name,
    );
    if (alreadyExist) {
      alert(`${addPerson.Name} already exist in the phonebook`);
      return;
    }
    setPersons([...persons, addPerson]);
    console.log(addPerson);
    setPerson("");
    setNumber(undefined);
  }

  return (
    <>
      <Search value={searchQuerry} onchange={handleSearch} />
      <AddPerson
        onSubmit={onSubmit}
        Name={person}
        Number={number}
        onChangeNumber={handleNumber}
        onChangeName={handlePerson}
      />
      <PersonList personList={persons} />
    </>
  );
}

export default App;
