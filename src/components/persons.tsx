export type person = {
  id: string | number;
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
        return (
          <div key={person.id}>
            <li>Name: {person.name}</li>
            <li> Number: {person.contact}</li>
            <button onClick={() => removeFn(person.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
}
