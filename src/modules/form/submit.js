import { scheduleNew } from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js"
import dayjs from "dayjs"

const form = document.querySelector("form")

const clientName = document.querySelector("#client")
const selectedDate = document.querySelector("#date")
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

selectedDate.value = inputToday
selectedDate.min = inputToday

form.addEventListener("submit", async (event) => {
    event.preventDefault()
    
    try {
        const name = clientName.value.trim()
        const hourSelected = document.querySelector(".hour-selected")

        if (!name) {
            return alert("Type in the client name!")
        }

        if(!hourSelected) {
            return alert("Select an available time!")
        }

        const [hour] = hourSelected.innerText.split(":")

        const when = dayjs(selectedDate.value).add(hour, "hour")

        const id = new Date().getTime()

        await scheduleNew({id,name,when})

        await schedulesDay()

        clientName.value = ""
    } catch (error) {
        alert("Sorry! It was not possible to save your appointment.")
        console.log(error)
    }
})

