import {openingHours} from "../../utils/opening-hours.js"
import dayjs from "dayjs"

const hours = document.querySelector("#hours")

export function hoursLoad({date}) {
    const opening = openingHours.map((hour) => {
        const [scheduleHour] = hour.split(":")
        
        const isPastHour = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
        
        return ({
            hour,
            available: isPastHour
        })
    })

    opening.forEach(({hour, available}) => {
        const li = document.createElement("li")
        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")
        li.textContent = hour

        if (hour === "9:00") {
            hourHeaderAdd("Morning")
        } else if (hour === "13:00") {
            hourHeaderAdd("Afternoon")
        } else if (hour === "18:00") {
            hourHeaderAdd("Evening")
        }

        hours.append(li)
    })
}

function hourHeaderAdd(title) {
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title

    hours.append(header)
}