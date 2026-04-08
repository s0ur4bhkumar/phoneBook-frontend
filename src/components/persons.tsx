export type person = {
  id: string;
  Name: string;
  Number: number;
};

type personListPropType = {
  personList: person[];
};

export function PersonList({ personList }: personListPropType) {
  return (
    <>
      {personList.map((person) => {
        return (
          <div key={person.id}>
            <li>Name: {person.Name}</li>
            <li> Number: {person.Number}</li>
          </div>
        );
      })}
    </>
  );
}
