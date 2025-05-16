import dayjs from "dayjs"

const form = document.querySelector("form")

const selectedDate = document.querySelector("#date")
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

selectedDate.value = inputToday
selectedDate.min = inputToday

form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("SENT")
})

