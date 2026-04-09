import React, { useEffect, useState } from "react";
import { Search } from "./components/search";
import { AddPerson } from "./components/addPerson";
import { PersonList, type person } from "./components/persons";
import phoneBookServices from "./phoneBookServices/phoneBookServices";

function App() {
  const [persons, setPersons] = useState<person[]>([]);
  const [person, setPerson] = useState<string>("");
  const [Number, setNumber] = useState<string | number | undefined>();
  const [searchQuerry, setSearchQuerry] = useState("");

  useEffect(() => {
    phoneBookServices
      .getAll()
      .then((Response) => {
        setPersons([...Response.data]);
        console.log(Response);
        console.log("successfully fetched persons");
      })
      .catch((error) => console.log(error));
  }, []);

  function handlePerson(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setPerson(val);
  }

  function handleDelete(id: number | string) {
    phoneBookServices.remove(id).then(() => {
      setPersons([...persons.filter((person) => person.id !== id)]);
    });
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
    phoneBookServices.create(addPerson).then((Response) => {
      setPersons([...Response.data]);
    });
    // console.log(addPerson);
    setPerson("");
    setNumber(undefined);
  }

  const renderLst = persons.filter((person) => {
    // console.log(person);
    return person.Name.toLocaleLowerCase().includes(
      searchQuerry.toLocaleLowerCase(),
    );
  });

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
      <PersonList personList={renderLst} removeFn={handleDelete} />
    </>
  );
}

export default App;
