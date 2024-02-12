import Person from "./Person";

export function ListPersons() {
  return (
    <div className="container p-3 bg-light rounded  border">
        <h2 className="display-4 text-center">List of Persons</h2>
        <hr />

        <div>
          <Person/>
        </div>
    </div>
  )
}
