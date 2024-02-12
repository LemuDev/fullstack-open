import { FormPersons } from "./components/FormPersons"
import { ListPersons } from "./components/ListPersons"

function App(){

  return (
    <div className="container mx-auto row mt-4">
        <div className="col-md-6">
          <FormPersons/>
        </div>

        <div className="col-md-6">
          <div>
            <ListPersons/>
          </div>
        </div>
    </div>
  )
}

export default App
