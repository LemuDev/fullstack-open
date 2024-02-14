import { Dispatch, SetStateAction } from "react";
import Person from "./Person";

type Persons = {
  id: number,
  name: string,
  number: string
}
type Props = {
  list: Persons[],
  setList: Dispatch<SetStateAction<never[]>>
}


export function ListPersons({ list, setList }: Props) {
  

  return (
    <div className="container p-3 bg-light rounded  border">
        <h2 className="display-4 text-center">List of Persons</h2>
        <hr />

        <div>
          {
            list.map( l => 
              <Person persons={l} setPersons={setList} key={l.id}/>  
            )
          }
        </div>
    </div>
  )
}
