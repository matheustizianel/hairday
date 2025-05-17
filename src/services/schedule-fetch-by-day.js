import { apiConfig } from "./api-config.js"
import dayjs from "dayjs"

export async function scheduleFetchByDay({date}) {
    try {
        const response = await fetch(`${apiConfig.baseURL}/schedules`)

        const data = await response.json()

        const dailySchedules = data.filter(schedule => dayjs(date).isSame(schedule.when, "day"))

        return dailySchedules
    } catch (error) {
        alert("Sorry! It was not possible to fetch the selected day appointments.")
        console.log(error)
    }
}