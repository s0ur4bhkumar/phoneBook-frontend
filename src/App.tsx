import React, { useEffect, useState } from "react";
import { Search } from "./components/search";
import { AddPerson } from "./components/addPerson";
import { PersonList, type person } from "./components/persons";
import phoneBookServices from "./phoneBookServices/phoneBookServices";

function App() {
  const [persons, setPersons] = useState<person[]>([]);
  const [person, setPerson] = useState<string>("");
  const [contact, setcontact] = useState<string | contact | undefined>();
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

  function handleDelete(id: contact | string) {
    phoneBookServices.remove(id).then(() => {
      setPersons([...persons.filter((person) => person.id !== id)]);
    });
  }

  function handlecontact(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setcontact(val);
  }

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>): void {
    const val = e.target.value;
    setSearchQuerry(val);
  }

  function onSubmit(event: React.SubmitEvent<HTMLFormElement>): void {
    event.preventDefault();
    const addPerson: person = {
      id: crypto.randomUUID(),
      name: person,
      contact: contact,
    };
    const alreadyExist = persons.find(
      (person) => person.name === addPerson.name,
    );
    if (alreadyExist) {
      alert(`${addPerson.name} already exist in the phonebook`);
      return;
    }
    phoneBookServices.create(addPerson).then((Response) => {
      setPersons([...Response.data]);
    });
    // console.log(addPerson);
    setPerson("");
    setcontact(undefined);
  }

  const renderLst = persons.filter((person) => {
    return person.name
      .toLocaleLowerCase()
      .includes(searchQuerry.toLocaleLowerCase());
  });

  return (
    <>
      <Search value={searchQuerry} onchange={handleSearch} />
      <AddPerson
        onSubmit={onSubmit}
        name={person}
        contact={contact}
        onChangecontact={handlecontact}
        onChangename={handlePerson}
      />
      <PersonList personList={renderLst} removeFn={handleDelete} />
    </>
  );
}

export default App;
