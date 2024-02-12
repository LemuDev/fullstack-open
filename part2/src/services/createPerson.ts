import { dataForm } from "../types/dataForm"

export async function createPerson(values: dataForm){
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL


    const res = await fetch(BACKEND_URL + "/api/persons", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(values)
    })
    const data = await res.json()

    return data
}