export async function getPersons(){
    const res = await fetch("http://127.0.0.1:3000/api/persons")
    const data = await res.json()

    console.log(data)
    
    return data
}