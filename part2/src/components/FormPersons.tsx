
export function FormPersons() {
  return (
    <form className="container p-3 bg-light rounded  border" style={{maxWidth:"600px"}}>
        <h5 className="display-4 text-center">Create Person</h5>

        <div className="form-group my-2">
            <label className="mx-1" htmlFor="name">Name</label>
            <input type="text" id="name"placeholder="Full Name..." className="form-control" />
        </div>

        <div className="form-group my-2">
            <label className="mx-1" htmlFor="number">Number</label>
            <input type="text" id="number"placeholder="Number..." className="form-control" />
        </div>

        <input type="submit" className="btn btn-primary w-100"/>
    </form>
  )
}

