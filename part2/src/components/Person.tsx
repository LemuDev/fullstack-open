import { Dispatch, SetStateAction } from 'react'
import { deletePerson } from "../services/deletePerson"
import { getPersons } from "../services/getPerson"
import { Persons } from "../types/Persons"

type Props = {
  persons: Persons,
  setPersons: Dispatch<SetStateAction<never[]>>
}

function Person({persons, setPersons}: Props) {

  const Delete = async () => {
    const { id } = persons

    const confirmDeleting = confirm("delete ") 

    if(confirmDeleting){
      await deletePerson(id)
      const persons = await getPersons()
      setPersons(persons)
    }
  }

  return (
    <div className="alert alert-secondary">
      <div className="flex justify-between items-">
        <div>
          <h5>{persons.name}</h5>
        
          <p>
            <span>{persons.number}</span>
          </p>
        </div>

        <div>
          <button className="btn btn-danger" onClick={Delete}>Delete</button>
        </div>
      </div>


    </div>
  )
}

export default Person