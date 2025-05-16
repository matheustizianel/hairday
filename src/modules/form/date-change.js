import { schedulesDay } from "../schedules/load.js"

const selectedDate = document.querySelector("#date")

selectedDate.addEventListener("change", () => {
    schedulesDay()
})