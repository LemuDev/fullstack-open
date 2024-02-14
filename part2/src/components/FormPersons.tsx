import React, { Dispatch, SetStateAction, useState } from "react"
import { getPersons } from "../services/getPerson"
import { dataForm } from "../types/dataForm"
import { createPerson } from "../services/createPerson"


type Props = {
  setList:  Dispatch<SetStateAction<never[]>>
}

export function FormPersons({setList}: Props) {
  const [values, setValues] = useState<dataForm>({name: '', number: ''})
  const [errors, setErrors] = useState<string>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target)

    setValues(
       {
        ...values,
        [e.currentTarget.name] : e.currentTarget.value
      }
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    
    const create = await createPerson(values)
    
    if(create.error != undefined){
      setErrors(create.error)
      
      return
    }

    

    const persons = await getPersons()
    setList(persons)

    setErrors("")

  }

  return (
    <form className="container p-3 bg-light rounded  border" style={{maxWidth:"600px"}} onSubmit={handleSubmit} >
        <h5 className="display-4 text-center">Create Person</h5>

        <div className="form-group my-2">
            <label className="mx-1" htmlFor="name">Name</label>
            <input type="text" id="name"placeholder="Full Name..." className="form-control" value={values.name} onChange={handleChange} name="name"/>
        </div>

        <div className="form-group my-2">
            <label className="mx-1" htmlFor="number">Number</label>
            <input type="text" id="number"placeholder="Number..." className="form-control" value={values.number} onChange={handleChange} name="number"/>
        </div>

        {
          errors?
            <div className="alert alert-danger p-1 px-2">
              <b className="text-sm">{errors}</b>
            </div>
          :null  
      }
        <input type="submit" className="btn btn-primary w-100"/>
    </form>
  )
}

