import { apiConfig } from "./api-config.js";

export async function scheduleNew({id, name, when}) {
    try {
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id, name, when })
        })

        alert("Appointment scheduled succesfully!")
    } catch (error) {
        alert("Sorry! It was not possible to save your appointment.")
        console.log(error)
    }
}