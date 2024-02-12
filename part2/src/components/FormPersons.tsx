import React, { Dispatch, SetStateAction, useState } from "react"
import { getPersons } from "../services/getPerson"

type dataForm = {
  name: string,
  number: string
}

type Props = {
  setList:  Dispatch<SetStateAction<never[]>>
}

export function FormPersons({setList}: Props) {
  const [values, setValues] = useState<dataForm>(
    {
      name: '',
      number: ''
    }
  )

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
    
    const persons = await getPersons()
    setList(persons)
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

        <input type="submit" className="btn btn-primary w-100"/>
    </form>
  )
}

