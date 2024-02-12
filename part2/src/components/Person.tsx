import { Persons } from "../types/Persons"

type Props = {
  persons: Persons
}

function Person({persons}: Props) {
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
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>


    </div>
  )
}

export default Person