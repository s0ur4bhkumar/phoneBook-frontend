import React, { useState } from "react";
import { Search } from "./components/search";
import { AddPerson } from "./components/addPerson";
import { PersonList, type person } from "./components/persons";

function App() {
  const [persons, setPersons] = useState<person[]>([
    {
      id: 1,
      Name: "Arjun Mehta",
      Number: "98765-43210",
    },
    {
      id: 2,
      Name: "Sara Chen",
      Number: "555-012-3456",
    },
    {
      id: 3,
      Name: "Marcus Holloway",
      Number: "415-555-2671",
    },
    {
      id: 4,
      Name: "Elena Rodriguez",
      Number: "040-1234-5678",
    },
    {
      id: 5,
      Name: "Kenji Sato",
      Number: "+81-90-1234-5678",
    },
    {
      id: 6,
      Name: "Priya Sharma",
      Number: "99887-76655",
    },
  ]);
  const [person, setPerson] = useState<string>("");
  const [Number, setNumber] = useState<Number | undefined | string>();
  const [searchQuerry, setSearchQuerry] = useState("");
  function handlePerson(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setPerson(val);
  }

  function handleNumber(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setNumber(val);
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
      Number: Number,
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

  const renderLst = persons.filter((person) =>
    person.Name.toLocaleLowerCase().includes(searchQuerry.toLocaleLowerCase()),
  );

  return (
    <>
      <Search value={searchQuerry} onchange={handleSearch} />
      <AddPerson
        onSubmit={onSubmit}
        Name={person}
        Number={Number}
        onChangeNumber={handleNumber}
        onChangeName={handlePerson}
      />
      <PersonList personList={renderLst} />
    </>
  );
}

export default App;
