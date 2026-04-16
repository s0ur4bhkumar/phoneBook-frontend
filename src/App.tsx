import React, { useEffect, useState } from "react";
import { Search } from "./components/search";
import { AddPerson } from "./components/addPerson";
import { PersonList, type person } from "./components/persons";
import phoneBookServices from "./phoneBookServices/phoneBookServices";

function App() {
  const [persons, setPersons] = useState<person[]>([]);
  const [person, setPerson] = useState<string>("");
  const [contact, setcontact] = useState<string | number | undefined>();
  const [searchQuerry, setSearchQuerry] = useState("");
  useEffect(() => {
    phoneBookServices
      .getAll()
      .then((Response) => {
        setPersons([...Response.data]);
      })
      .catch((error) => console.log(error));
  }, []);

  function handlePerson(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setPerson(val);
  }

  function handleDelete(id: number | string) {
    phoneBookServices.remove(id).then((response) => {
      setPersons([...response.data]);
    });
    return;
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
      name: person,
      contact: contact,
    };
    const alreadyExist = persons.find(
      (person) => person.name === addPerson.name,
    );
    if (alreadyExist) {
      const id = persons.find((person) => person.name === addPerson.name)?.id;
      const updateContact = confirm(
        `${addPerson.name} already exist in the phonebook`,
      );
      if (updateContact) {
        phoneBookServices
          .update({ id: id, contact: addPerson.contact })
          .then((Response) => {
            console.log(Response);
            setPersons([...Response.data]);
          });
      }
      return;
    }
    phoneBookServices.create(addPerson).then((Response) => {
      console.log(Response.data);
      setPersons([...Response.data]);
    });
    // console.log(addPerson);
    setPerson("");
    setcontact(undefined);
  }
  console.log("person list before renderlst: ", persons);
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
        onChangeNumber={handlecontact}
        onChangeName={handlePerson}
      />
      <PersonList personList={renderLst} removeFn={handleDelete} />
    </>
  );
}

export default App;
