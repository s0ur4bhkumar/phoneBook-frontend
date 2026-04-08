export type person = {
  id: string | number;
  Name: string;
  Number: number | undefined | string;
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
