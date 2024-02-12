export async function getPersons(){
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
    const res = await fetch(BACKEND_URL + "/api/persons")
    const data = await res.json()

    console.log(data)
    
    return data
}