
export async function deletePerson(id: number){
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL


    const res = await fetch(BACKEND_URL + `/api/persons/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })
    const data = await res.json()

    return data
}