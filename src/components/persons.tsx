type person = {
  id: string;
  name: string;
  number: number;
};

type PersonsPropType = {
  persons: person[];
};

export function Persons({ persons }: PersonsPropType) {
  return (
    <>
      {persons.map((person) => {
        return (
          <div key={person.id}>
            <li>Name: {person.name}</li>
            <li> Number: {person.number}</li>
          </div>
        );
      })}
    </>
  );
}
