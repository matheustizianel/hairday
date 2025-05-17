import { apiConfig } from "./api-config.js";

export async function scheduleCancel({id}) {
    try {
        await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
            method: "DELETE"
        })

        alert("Appointment canceled successfully!")
    } catch (error) {
        alert("Sorry. It was not possible to cancel your appointment at the moment! Please try again!")
        console.log(error)
    }
}