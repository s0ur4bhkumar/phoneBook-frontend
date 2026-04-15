export type person = {
  id?: string | number;
  name: string;
  contact: number | undefined | string;
};

type personListPropType = {
  personList: person[];
  removeFn: (id: string | number) => void;
};

export function PersonList({ personList, removeFn }: personListPropType) {
  return (
    <>
      {personList.map((person) => {
        console.log("in add person component", person.id);
        return (
          <div key={person.id}>
            <li key={person.name + person.id}>Name: {person.name}</li>
            <li key={person.contact}> Number: {person.contact}</li>
            <button onClick={() => removeFn(person.id!)}>Delete</button>
          </div>
        );
      })}
    </>
  );
}
