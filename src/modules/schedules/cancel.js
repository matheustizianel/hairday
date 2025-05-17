import { scheduleCancel } from "../../services/schedule-cancel.js"
import { schedulesDay } from "./load.js"

const periods = document.querySelectorAll(".period")

periods.forEach((period) => {
    period.addEventListener("click", async (event) => {
        if (event.target.classList.contains("cancel-icon")) {
            const item = event.target.closest("li")
            const {id} = item.dataset
            
            if (id) {
                const isConfirmed = confirm("Are you sure you want to cancel your appointment? This is not reversible!")

                if (isConfirmed) {
                    await scheduleCancel({id})     
                    schedulesDay()     
                    console.log("DELETED")   
                }
            }
        }
    })
})