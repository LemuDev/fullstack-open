import { useEffect, useState } from "react"
import { FormPersons } from "./components/FormPersons"
import { ListPersons } from "./components/ListPersons"
import { getPersons } from "./services/getPerson"


function App(){

  const [listOfPersons, setListOfPersons] = useState([])
 
  
  const fetchPersons = async ()=>{
    const persons = await getPersons()
    setListOfPersons(persons)
  }

  useEffect(() => {

    fetchPersons()

  }, [])
  



  return (
    <div className="container mx-auto row mt-4">
        <div className="col-md-6">
          <FormPersons setList={setListOfPersons}/>
        </div>

        <div className="col-md-6">
          <div>
            <ListPersons list={listOfPersons}/>
          </div>
        </div>
    </div>
  )
}

export default App
